import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import React, { FormEventHandler, useEffect } from 'react'

const CrmBankEdit = ({ bank }) => {

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        details: ''
    })

    useEffect(() => {
        if (bank) {
            setData({
                name: bank.name,
                details: bank.details
            });
        }
    }, [bank, setData]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route('crm.bank.update',{ slug: bank.slug }), {
            onFinish: () => reset(), // Reset form after submission
        })
    }
    return (
        <AppLayout>
            <Head title="Update Bank" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>Update Bank</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="grid gap-4">
                        {/* Title */}
                        <div>
                            <Label >Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Bank Name"
                            />
                        </div>

                        {/* Summary */}
                        <div>
                            <Label >details</Label>
                            <textarea
                                className='border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-15 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                                id="details"
                                required
                                value={data.details}
                                onChange={(e) => setData('details', e.target.value)}
                                placeholder="A quick details of the bank..."
                            ></textarea>

                        </div>

                        {/* Submit */}
                        <Button type="submit" className="mt-4 w-48" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
                            Save Bank
                        </Button>
                    </form>
                </CardContent>
                <CardFooter />
            </Card>
        </AppLayout>
    )
}

export default CrmBankEdit
