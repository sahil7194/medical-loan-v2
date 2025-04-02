import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'blogs',
        href: '/blogs',
    },
];

const blogs = ({blogs}) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                this page for bogs
                <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.slug}</p>

                    </li>
                ))}
            </ul>

            </div>
        </AppLayout>
    )
}

export default blogs
