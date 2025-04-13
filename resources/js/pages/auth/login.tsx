import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm, usePage } from '@inertiajs/react'
import { Checkbox } from '@radix-ui/react-checkbox'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import React, { FormEventHandler } from 'react'

const heading = "Login";
const subheading = "Welcome back";
const logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "Shadcnblocks",
};
const loginText = "Log in";
const signupText = "Don't have an account?";
const signupUrl = "/signup";

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
    redirect_url: string
};

const Login = () => {

    const { url } = usePage();
    const queryParams = new URLSearchParams(url.split('?')[1]);

    const vendorCode = queryParams.get('redirect_url');

    const { data, setData, post, processing, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
        redirect_url: vendorCode
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

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
                                <form onSubmit={submit}>
                                    <div className="grid gap-4">
                                        <div>
                                            <div className="flex items-center">
                                                <Label >Email</Label>
                                            </div>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <Label >Password</Label>
                                            </div>
                                            <Input
                                                id="password"
                                                type="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="remember"
                                                    checked={data.remember}
                                                    onClick={() => setData('remember', !data.remember)}
                                                    tabIndex={3}
                                                    className="border-muted-foreground"
                                                />
                                                <label
                                                    htmlFor="remember"
                                                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="/forget-password" className="text-sm text-primary hover:underline">
                                                Forgot password
                                            </a>
                                        </div>
                                        <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            {loginText}
                                        </Button>
                                    </div>
                                </form>
                                <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                                    <p>{signupText}</p>
                                    <a href={signupUrl} className="font-medium text-primary">
                                        Sign up
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

export default Login
