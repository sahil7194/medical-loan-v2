import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import React, { FormEventHandler } from 'react'

const CibilCheck = ({states, cities}) => {


    // console.log(states, cities);

    const { data, setData, post, processing, reset } = useForm({
        full_name: '',
        date_of_birth: '',
        gender: '',
        pan_card_number: '',
        mobile: '',
        email: '',
        address: '',
        pin_code: '',
        state_id: '',
        city_id: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('cibil.check'), {
            onFinish: () => reset(),
        });
    };

    return (
        <AppLayout>
            <Head title="CIBIL Check" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>CIBIL Check</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid gap-4">
                            {/* Personal Details */}
                            <div>
                                <Label>Full Name</Label>
                                <Input
                                    id="full_name"
                                    type="text"
                                    required
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name', e.target.value)}
                                    placeholder="Jon Doe"
                                    autoFocus
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
                                <Label>Gender</Label>
                                <select
                                    id="gender"
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    required
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <Label>PAN Card Number</Label>
                                <Input
                                    id="pan_card_number"
                                    type="text"
                                    required
                                    value={data.pan_card_number}
                                    onChange={(e) => setData('pan_card_number', e.target.value)}
                                    placeholder="ABCDE1234F"
                                />
                            </div>

                            {/* Contact Details */}
                            <div>
                                <Label>Mobile Number</Label>
                                <Input
                                    id="mobile"
                                    type="text"
                                    required
                                    value={data.mobile}
                                    onChange={(e) => setData('mobile', e.target.value)}
                                    placeholder="7083736757"
                                />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                />
                            </div>

                            {/* Address Details */}
                            <div>
                                <Label>Address</Label>
                                <textarea
                                    id="address"
                                    required
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    placeholder="Enter your address"
                                    className="w-full h-24 p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <Label>Pin Code</Label>
                                <Input
                                    id="pin_code"
                                    type="text"
                                    required
                                    value={data.pin_code}
                                    onChange={(e) => setData('pin_code', e.target.value)}
                                    placeholder="123456"
                                />
                            </div>
                            <div>
                                <Label>State</Label>
                                <select
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"

                                    id="state"
                                    required
                                    value={data.state_id}
                                    onChange={(e) => setData('state_id', e.target.value)}
                                >
                                    <option value="">Select State</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state.id}>{state.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Label>City</Label>
                                <select
                                    id="city"
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"

                                    required
                                    value={data.city_id}
                                    onChange={(e) => setData('city_id', e.target.value)}
                                >
                                    <option value="">Select City</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city.id}>{city.name}</option>
                                    ))}
                                </select>
                            </div>

                            <Button type="submit" className="mt-4 w-48" tabIndex={4} disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Save
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {/* You can add additional buttons here */}
                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default CibilCheck
