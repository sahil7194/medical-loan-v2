import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { Head, router } from '@inertiajs/react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const CrmSchemeShow = ({ scheme }) => {
    return (
        <AppLayout>
            <Head title={scheme.title} />

            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{scheme.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Slug: {scheme.slug}</p>
                </CardHeader>

                <CardContent className="space-y-5">
                    {/* Scheme Image */}
                    {scheme.image && (
                        <div className="w-full">
                            <img
                                src={scheme.image}
                                alt={scheme.title}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    )}

                    {/* Summary */}
                    <div>
                        <h2 className="text-lg font-semibold">Summary</h2>
                        <p className="text-gray-700">{scheme.summary}</p>
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="text-lg font-semibold">Description</h2>
                        <p className="text-gray-800 whitespace-pre-line">{scheme.description}</p>
                    </div>

                    <Separator />

                    {/* Interest & CIBIL */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium">Interest Rate</h3>
                            <p>{scheme.min_interest_rate}% - {scheme.max_interest_rate}%</p>
                        </div>
                        <div>
                            <h3 className="font-medium">CIBIL Score</h3>
                            <p>{scheme.min_cibil} - {scheme.max_cibil}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Tenure (Months)</h3>
                            <p>{scheme.min_tenure} - {scheme.max_tenure}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Loan Amount</h3>
                            <p>₹{scheme.min_amount} - ₹{scheme.max_amount}</p>
                        </div>
                    </div>

                    {/* Redirection Link */}
                    <div>
                        <h3 className="font-medium">Redirection Link</h3>
                        <a
                            href={scheme.redirection_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            {scheme.redirection_link}
                        </a>
                    </div>

                    {/* Metadata */}
                    <Separator />
                    <div className="text-sm text-muted-foreground space-y-1">
                        <p>Status: {scheme.status}</p>
                        <p>Bank: {scheme.bank?.name ?? 'N/A'}</p>
                        <p>Created By: {scheme.user?.name ?? 'Unknown'}</p>
                    </div>
                </CardContent>

                {/* Edit/Delete Actions */}
                <CardFooter className="flex justify-end gap-2">
                    <Button
                        variant="secondary"
                        onClick={() => router.visit(route('crm.schemes.edit', scheme.slug))}
                    >
                        Edit
                    </Button>

                    <Button
                        variant="destructive"
                        onClick={() => {
                            if (confirm('Are you sure you want to delete this scheme?')) {
                                router.visit(route('crm.schemes.delete', scheme.slug))
                            }
                        }}
                    >
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default CrmSchemeShow
