import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const CrmHome = () => {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    Welcome to CRM Home
                </h1>
            </div>
        </AppLayout>
    )
}

export default CrmHome
