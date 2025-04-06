import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

const heading = "Signup";
const subheading = "Create a new account";
const logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "Shadcnblocks",
};
const loginText = "Create an account";
const signupText = "Already have an account?";
const signupUrl = "/login";

const singup = () => {
    return (
        <AppLayout>
            <Head title="Login" />
            <section className="py-32">
                <div className="container">
                    <div className="flex flex-col gap-4">
                        <div className="mx-auto w-full max-w-sm rounded-md p-6 shadow">
                            <div className="mb-6 flex flex-col items-center">
                                <a href={logo.url} className="mb-6 flex items-center gap-2">
                                    <img src={logo.src} className="max-h-8" alt={logo.alt} />
                                </a>
                                <h1 className="mb-2 text-2xl font-bold">{heading}</h1>
                                <p className="text-muted-foreground">{subheading}</p>
                            </div>
                            <div>
                                <div className="grid gap-4">
                                    <Input type="email" placeholder="Enter your email" required />
                                    <div>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="mt-2 w-full">
                                        {loginText}
                                    </Button>

                                </div>
                                <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                                    <p>{signupText}</p>
                                    <a href={signupUrl} className="font-medium text-primary">
                                        Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default singup
