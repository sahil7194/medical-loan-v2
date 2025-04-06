import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const scheme = () => {
  return (
    <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    This home page of new loan application site
                </h1>
            </div>
        </AppLayout>
  )
}

export default scheme
