import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AgentHome = () => {
    const { flash } = usePage();  // Destructure flash data from usePage()

    useEffect(() => {
        // Ensure flash is defined and check for flash.message
        if (flash && flash.message) {
            toast.success(flash.message); // Show the success toast if the message exists
            console.log(flash)
        }

        // this.toast.success(flash.success);
        console.log(flash);

    }, [flash]);  // Run the effect when flash data changes

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>Agent Home</h1>
            </div>
        </AppLayout>
    );
};

export default AgentHome;
