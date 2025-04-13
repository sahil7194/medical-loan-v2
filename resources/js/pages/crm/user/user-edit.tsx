import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import path from 'path'
import React, { FormEventHandler, useEffect } from 'react'

const CrmUserEdit = ({ user }) => {

    // Initialize form with empty fields
    const { data, setData, put, processing, reset } = useForm({
        name: '',
        mobile: '',
        email: '',
        user_type: '',
        password: '',
        date_of_birth: '',
        gender: ''
    });

    // Update form data when `user` prop is available (component mounts)
    useEffect(() => {
        if (user) {
            setData({
                name: user.name || '',
                mobile: user.mobile || '',
                email: user.email || '',
                user_type: user.user_type || '',
                password: '',
                date_of_birth: user.date_of_birth || '',
                gender: user.gender || ''
            });
        }
    }, [user, setData]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // let url = '';
        put('/crm/users/' + user.slug + '/edit', {
            onFinish: () => reset('password'), // Reset password field after submitting
        });
    };

    return (
        <AppLayout>
            <Head title="Edit User" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>
                        Edit User
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid gap-4">
                            <div>
                                <div className="flex items-center">
                                    <Label>Name</Label>
                                </div>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Jon Doe"
                                />
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label >Gender</Label>
                                </div>
                                <select
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    name="" id="" onChange={(e) => setData('gender', e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other"> Other</option>
                                </select>

                            </div>
                            <div>
                                <Label>Date of Birth</Label>
                                <Input
                                    id="date_of_birth"
                                    type="date"
                                    required
                                    value={data.date_of_birth}
                                    onChange={(e) => setData('date_of_birth', e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>Email</Label>
                                </div>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>Mobile</Label>
                                </div>
                                <Input
                                    id="mobile"
                                    type="text"
                                    required
                                    tabIndex={3}
                                    autoComplete="mobile"
                                    value={data.mobile}
                                    onChange={(e) => setData('mobile', e.target.value)}
                                    placeholder="7083736757"
                                />
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>User Type</Label>
                                </div>
                                <select
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    name="user_type"
                                    id="user_type"
                                    value={data.user_type}
                                    onChange={(e) => setData('user_type', e.target.value)}
                                >
                                    <option value="0">User</option>
                                    <option value="1">Agent</option>
                                    <option value="2">Staff</option>
                                </select>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    tabIndex={4}
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                />
                            </div>

                            <Button type="submit" className="mt-4 w-48" tabIndex={5} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Save
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {/* You can add footer buttons or information here */}
                </CardFooter>
            </Card>
        </AppLayout>
    );
}

export default CrmUserEdit;


