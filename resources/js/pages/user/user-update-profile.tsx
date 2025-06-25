import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import React, { FormEventHandler, useEffect, useState } from 'react'
import axios from 'axios'


const UserUpdateProfile = ({ user, states }) => {

    const { data, setData, put, processing, reset } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        mobile: user?.mobile || '',
        gender: user?.gender || '',
        date_of_birth: user?.date_of_birth || '',
        address: user?.address?.address || '',
        city_id: user?.address?.city_id || '',
        state_id: user?.address?.state_id || '',
        pin_code: user?.address?.pin_code || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('user.update', user?.id), {
            onFinish: () => reset(),
        });
    };

    const [localCities, setLocalCities] = useState( []);
    const [loadingCities, setLoadingCities] = useState(false);

    // Fetch cities on initial mount if user already has a state
    useEffect(() => {
        const fetchCitiesForInitialState = async () => {
            if (data.state_id) {
                setLoadingCities(true);
                try {
                    const response = await axios.get(`/cities?state_id=${data.state_id}`);
                    setLocalCities(response.data);
                } catch (error) {
                    console.error('Error fetching cities:', error);
                    setLocalCities([]);
                } finally {
                    setLoadingCities(false);
                }
            } else {
                setLocalCities(cities || []);
            }
        };

        fetchCitiesForInitialState();
    }, []);

    const handleStateChange = async (e) => {
        const selectedStateId = e.target.value;
        setData('state_id', selectedStateId);
        setData('city_id', ''); // reset city

        if (selectedStateId) {
            setLoadingCities(true);
            try {
                const response = await axios.get(`/cities?state_id=${selectedStateId}`);
                setLocalCities(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
                setLocalCities([]);
            } finally {
                setLoadingCities(false);
            }
        } else {
            setLocalCities([]);
        }
    };

    return (
        <AppLayout>
            <Head title="Update User Profile" />
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Update User Profile</CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={submit} className="grid gap-6">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label>Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Mobile</Label>
                                <Input
                                    id="mobile"
                                    type="text"
                                    value={data.mobile}
                                    onChange={(e) => setData('mobile', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label>Gender</Label>
                                <select
                                    id="gender"
                                    className="border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base"
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <Label>Date of Birth</Label>
                                <Input
                                    id="date_of_birth"
                                    type="date"
                                    value={data.date_of_birth}
                                    onChange={(e) => setData('date_of_birth', e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <Label>Address</Label>
                                <textarea
                                    id="address"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    className="w-full h-24 p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <Label>Pin Code</Label>
                                <Input
                                    id="pin_code"
                                    value={data.pin_code}
                                    onChange={(e) => setData('pin_code', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label>State</Label>
                                <select
                                    id="state_id"
                                    className="border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base"
                                    value={data.state_id}
                                    // onChange={(e) => setData('state_id', e.target.value)}
                                    required
                                    onChange={handleStateChange}
                                >
                                    <option value="">Select State</option>
                                    {states.map((state) => (
                                        <option key={state.id} value={state.id}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Label>City</Label>
                                <select
                                    id="city_id"
                                    className="border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base"
                                    value={data.city_id}
                                    onChange={(e) => setData('city_id', e.target.value)}
                                    required
                                >
                                    <option value="">Select City</option>
                                    {localCities.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <Button type="submit" className="w-48" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                                Update
                            </Button>
                        </div>
                    </form>
                </CardContent>

                <CardFooter />
            </Card>
        </AppLayout>
    );
}

export default UserUpdateProfile
