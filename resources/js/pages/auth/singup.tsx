import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

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

type SignupForm = {
    name: string;
    mobile: string;
    user_type: string;
    email: string;
    password: string;
};

const singup = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, setData, post, processing, errors,reset } = useForm<Required<SignupForm>>({
        name: '',
        mobile: '',
        user_type: 0,
        email: '',
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('signup'), {
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
                                <div className="grid gap-4">
                                    <form onSubmit={submit}>
                                        <div className="grid gap-4">

                                            <div>
                                                <div className="flex items-center">
                                                    <Label >Name</Label>
                                                </div>
                                                <Input
                                                    id="name"
                                                    type="name"
                                                    required
                                                    autoFocus
                                                    tabIndex={1}
                                                    autoComplete="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Jon Doe"
                                                />
                                            </div>
                                           <InputError message={errors.email} />

                                            <div>
                                                <div className="flex items-center">
                                                    <Label >Mobile</Label>
                                                </div>
                                                <Input
                                                    id="mobile"
                                                    type="mobile"
                                                    required
                                                    autoFocus
                                                    tabIndex={1}
                                                    autoComplete="mobile"
                                                    value={data.mobile}
                                                    onChange={(e) => setData('mobile', e.target.value)}
                                                    placeholder="9999999999"
                                                />
                                            </div>

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

                                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                                {loginText}
                                            </Button>
                                        </div>
                                    </form>

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
