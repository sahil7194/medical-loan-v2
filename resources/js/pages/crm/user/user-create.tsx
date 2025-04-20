import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import React, { FormEventHandler } from 'react'

const CrmUserCreate = () => {

    const { data, setData, post, processing, reset } = useForm<Required<any>>({
        name: '',
        mobile: '',
        email: '',
        type: '',
        password: '',
        date_of_birth: '',
        gender: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('crm.users.create'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AppLayout>
            <Head title="Create New User" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>
                        Create New User
                    </CardTitle>
                </CardHeader>
                <CardContent>
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
                                    placeholder="999999999"
                                />
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
                                    <Label >User Type</Label>
                                </div>
                                <select
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    name="" id="" onChange={(e) => setData('type', e.target.value)}>
                                    <option value="0">User</option>
                                    <option value="1">Agent</option>
                                    <option value="2"> Staff</option>
                                </select>

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

                            <Button type="submit" className="mt-4 w-48" tabIndex={4} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                save
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {/* <Button>
                        Save
                    </Button> */}
                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default CrmUserCreate
