import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const blog = () => {
  return (
    <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    blog
                </h1>
            </div>
        </AppLayout>
  )
}

export default blog
