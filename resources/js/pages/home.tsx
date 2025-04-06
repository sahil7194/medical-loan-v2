import AppLayout from '@/layouts/app-layout'
import { SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const Home = () => {

    const { auth } = usePage<SharedData>().props;

    return (

        <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    This home page of new loan application site
                </h1>
                {/* {auth.user.name}
                {auth.user.email}
                {auth.user.avatar}
                {auth.user.user_type} */}
            </div>
        </AppLayout>

    )
}

export default Home
