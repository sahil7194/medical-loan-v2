import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { Head, router, usePage } from '@inertiajs/react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const CrmBlogShow = ({blog}) => {

    function handleDelete(event:any): void {
        throw new Error('Function not implemented.')
    }

    return (
        <AppLayout>
            <Head title={blog.title} />

            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{blog.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Slug: {blog.slug}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Blog Image */}
                    {blog.image && (
                        <div className="w-full">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    )}

                    {/* Summary */}
                    <div>
                        <h2 className="text-lg font-semibold">Summary</h2>
                        <p className="text-gray-700">{blog.summary}</p>
                    </div>

                    <Separator />

                    {/* Content */}
                    <div>
                        <h2 className="text-lg font-semibold">Content</h2>
                        <p className="text-gray-800 whitespace-pre-line">{blog.content}</p>
                    </div>

                    {/* Metadata */}
                    <Separator />
                    <div className="text-sm text-muted-foreground">
                        <p>Status: {blog.status ?? 'Draft'}</p>
                        <p>Author: {blog.user?.name ?? 'Unknown'}</p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => router.visit(route('crm.blog.edit', blog.slug))}
                    >
                        Edit
                    </Button>

                    <Button
                        variant="destructive"
                        // onClick={handleDelete}
                        onClick={() => router.visit(route('crm.blog.delete', blog.slug))}

                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </AppLayout>
    )

}

export default CrmBlogShow
