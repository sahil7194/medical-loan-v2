import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react';
import React from 'react'


const heading = "Schemes";
const description = "Discover the latest insights about modern schemes";

const schemes = ({schemes}) => {

    return (
        <AppLayout>
            <Head title="Blogs" />
            <section className="py-12">
                <div className="container flex flex-col items-center gap-16">
                    <div className="text-center">
                        <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
                            {heading}
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                            {description}
                        </p>
                    </div>

                    <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                        {schemes.map((scheme) => (
                            <Card
                                key={scheme.id}
                                className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
                            >
                                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                    <div className="sm:col-span-5">
                                        <div className="mb-4 md:mb-6">
                                            {/* <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                                                {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                                            </div> */}
                                        </div>
                                        <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                                            <a
                                                href={scheme.url}
                                                target="_blank"
                                                className="hover:underline"
                                            >
                                                {scheme.title}
                                            </a>
                                        </h3>
                                        <p className="mt-4 text-muted-foreground md:mt-5">
                                            {scheme.summary}
                                        </p>
                                        <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                                            <span className="text-muted-foreground">{scheme?.user?.name}</span>
                                            <span className="text-muted-foreground">•</span>
                                            <span className="text-muted-foreground">
                                            {new Date(scheme.created_at).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                        <div className="mt-6 flex items-center space-x-2 md:mt-8">
                                            <a
                                                href={"/schemes/"+scheme.slug}
                                                target="_blank"
                                                className="inline-flex items-center font-semibold hover:underline md:text-base"
                                            >
                                                <span>Read more</span>
                                                <ArrowRight className="ml-2 size-4 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="order-first sm:order-last sm:col-span-5">
                                        <a href={scheme.url} target="_blank" className="block">
                                            <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                                                <img
                                                    src={scheme.image}
                                                    alt={scheme.title}
                                                    className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default schemes
