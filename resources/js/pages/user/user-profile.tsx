import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const UserProfile = () => {
  return (
    <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    user profile
                </h1>
            </div>
        </AppLayout>
  )
}

export default UserProfile
