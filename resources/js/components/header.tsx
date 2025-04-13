import React, { FormEventHandler } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';

const Header = () => {

    const { auth } = usePage<SharedData>().props;

    let navLinks = [
        { href: '/cibil-check', label: 'Check Cibil' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/schemes', label: 'Schemes' },
    ];

    if (!auth) {
        navLinks = navLinks.concat([
            { href: '/', label: 'Home' },
        ]);
    }

    if (auth.user) {
        if (auth.user.user_type == 0) {

            navLinks.unshift({ href: '/user/home', label: 'Home' });

            navLinks = navLinks.concat([
                // section for auth user users
                { href: '/user/profile', label: 'Profile' },
                { href: '/user/application-history', label: 'Application History' },
            ]);
        }

        if (auth.user.user_type == 1) {

            navLinks.unshift({ href: '/agent/home', label: 'Home' },);

            navLinks = navLinks.concat([
                // section for agent
                { href: '/agent/profile', label: 'Profile' },
                { href: '/agent/reference-history', label: 'Reference History' },
            ]);
        }

        if (auth.user.user_type == 2) {

            navLinks = [
                { href: '/crm/home', label: 'Home' },
                { href: '/crm/users', label: 'Users' },
                { href: '/crm/schemes', label: 'Schemes' },
                { href: '/crm/blog', label: 'Blogs' },
                { href: '/crm/bank', label: 'Banks' },
                { href: '/crm/application-history', label: 'Application History' },
                { href: '/crm/cibil-log', label: 'Cibil Log' },
            ];
        }
    }


    // logout
    const { post, reset } = useForm<Required<any>>();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('logout'), {
            onFinish: () => reset('password'),
        });
    };


    return (
        <header className="sticky top-0 z-50 px-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <a href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">
                            Medical Loan Buddy
                        </span>
                    </a>
                    <nav className="hidden gap-6 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-2">

                        {auth.user ? (
                            <>
                                <Button
                                    variant="outline"
                                    asChild className="w-full"
                                    onClick={submit}
                                >
                                    <a href="/logout">Logout</a>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outline" asChild className="w-full">
                                    <a href="/login">Sign In</a>
                                </Button>
                                <Button asChild className="w-full">
                                    <a href="/signup">Signup</a>
                                </Button>
                            </>

                        )}

                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col gap-4">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="flex flex-col gap-2 mt-4">
                                <Button variant="outline" asChild className="w-full">
                                    <a href="/login">Sign In</a>
                                </Button>
                                <Button asChild className="w-full">
                                    <a href="/signup">Signup</a>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header
