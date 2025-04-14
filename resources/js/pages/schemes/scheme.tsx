import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { toast } from 'react-toastify'

const scheme = ({ scheme, user }) => {

    const { data, setData, post, processing, reset } = useForm({
        slug: scheme.slug,
    });

    const apply = () => {

        console.log('applied to scheme')

        post(route('user.apply'), {
            onFinish: () => {

                const link = `${scheme.redirection_link}?vendor_code=${scheme?.bank?.vendor_code}`;

                toast.success('You have been successfully applied to the scheme');

                toast.success('wait for 2 sec you will be redirect to bank side');


                setTimeout(function () {

                    window.open(link, '_blank');
                }, 2000);
            },
        });
    }

    return (
        <AppLayout>
            <Head title={scheme.title} />
            <Card className="w-full max-w-4xl mx-auto p-6">
                {/* Image Section */}
                <CardHeader className="mb-10">
                    <img
                        src={scheme.image}
                        alt="scheme-details"
                        className="w-full h-72 object-cover rounded-lg shadow-lg"
                    />
                </CardHeader>

                {/* Scheme Title and Info Section */}
                <CardHeader>
                    <CardTitle className="text-4xl font-semibold text-gray-800 dark:text-white">
                        {scheme.title}
                    </CardTitle>
                    <CardDescription className="flex justify-center space-x-6 mb-8 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 11V5.236l7 3.236V7L12 4 3 7v1.472L10 5.236V11h7V7l-7-3.236z"
                                />
                            </svg>
                            <span className="ml-2 text-sm">
                                {new Date(scheme.created_at).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>
                        </div>
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-7">
                        {scheme.description}
                    </p>

                    {/* Scheme Details Section */}
                    <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                            Details
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label>Interest Rates</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Min: {scheme.min_interest_rate}% | Max: {scheme.max_interest_rate}%
                                </p>
                            </div>

                            <div>
                                <Label>CIBIL Score</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Min: {scheme.min_cibil} | Max: {scheme.max_cibil}
                                </p>
                            </div>

                            <div>
                                <Label>Tenure</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Min: {scheme.min_tenure} months | Max: {scheme.max_tenure} months
                                </p>
                            </div>

                            <div>
                                <Label>Loan Amount</Label>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">
                                    Min: ₹{scheme.min_amount} | Max: ₹{scheme.max_amount}
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>

                {/* Apply Button Section */}
                <CardFooter className="flex justify-center mt-10">

                    <div className="w-1/4">
                        {user ? (
                            <>
                                <Button
                                    variant="outline"
                                    asChild className="w-full"
                                    onClick={() => apply()}
                                >
                                    <a >
                                        Apply
                                    </a>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline" asChild className="w-full">
                                    <a
                                        href={'/login?redirect_url=' + scheme.slug}
                                    >
                                        Login To Apply this Scheme
                                    </a>
                                </Button>
                            </>

                        )}
                    </div>

                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default scheme
