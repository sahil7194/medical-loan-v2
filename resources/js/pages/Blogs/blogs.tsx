import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const blogs = () => {
  return (
    <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    Blogs
                </h1>
            </div>
        </AppLayout>
  )
}

export default blogs
