import AppLayout from '@/layouts/app-layout'
import React from 'react'
import { Head } from '@inertiajs/react';
const Home = () => {
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

export default Home
