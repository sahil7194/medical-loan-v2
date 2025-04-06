import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const schemes = () => {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    <span className="text-3xl font-bold">Schemes</span>
                </h1>
            </div>
        </AppLayout>
    )
}

export default schemes
