import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'

const UserProfile = ({ user }) => {

    return (
        <AppLayout>
            <Head title='User Profile' />
            <Card className="w-full max-w-4xl mx-auto p-6">

                <CardContent>

                    <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                            Basic Info
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label> Name</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.name}
                                </p>
                            </div>

                            <div>
                                <Label> Email</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.email}
                                </p>
                            </div>

                            <div>
                                <Label> Mobile Number</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.mobile}
                                </p>
                            </div>

                            <div>
                                <Label> Gender</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.gender}
                                </p>
                            </div>

                            <div>
                                <Label> Date of Birth</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.date_of_birth}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                            Address
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label> Address </Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.address?.address}
                                </p>
                            </div>
                            <div>
                                <Label> City </Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.address?.city?.name}
                                </p>
                            </div>
                            <div>
                                <Label> State </Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.address?.state?.name}

                                </p>
                            </div>
                            <div>
                                <Label> Pincode </Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    {user?.address?.pin_code}
                                </p>
                            </div>

                        </div>
                    </div>
                </CardContent>

                {/* Apply Button Section */}
                <CardFooter className="flex justify-center mt-10">

                    <div className="w-1/4">

                        <Button
                            variant="outline"
                            asChild className="w-full"
                        >
                            <a >
                                Edit
                            </a>
                        </Button>

                    </div>

                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default UserProfile
