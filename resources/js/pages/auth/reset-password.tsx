import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ResetPassword = () => {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    Reset Password
                </h1>
            </div>
        </AppLayout>
    )
}

export default ResetPassword
