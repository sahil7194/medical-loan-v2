import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ApplicationHistory = () => {
  return (
    <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    Application History
                </h1>
            </div>
        </AppLayout>
  )
}

export default ApplicationHistory
