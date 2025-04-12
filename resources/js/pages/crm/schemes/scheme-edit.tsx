import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head, useForm } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import { LoaderCircle } from 'lucide-react'
import React, { FormEventHandler, useEffect } from 'react'

const CrmSchemeEdit = ({ scheme, banks }) => {

    const { data, setData, post, processing, reset } = useForm({
        title: '',
        summary: '',
        description: '',
        max_amount: '',
        min_amount: '',
        max_cibil: '',
        min_cibil: '',
        max_interest_rate: '',
        min_interest_rate: '',
        max_tenure: '',
        min_tenure: '',
        redirection_link: '',
        bank_id: ''
    });

    useEffect(() => {
        if (scheme) {
            setData({
                title: scheme.title,
                summary: scheme.summary,
                description: scheme.description,
                max_amount: scheme.max_amount,
                min_amount: scheme.min_amount,
                max_cibil: scheme.max_cibil,
                min_cibil: scheme.min_cibil,
                max_interest_rate: scheme.max_interest_rate,
                min_interest_rate: scheme.min_interest_rate,
                max_tenure: scheme.max_tenure,
                min_tenure: scheme.min_tenure,
                redirection_link: scheme.redirection_link,
                bank_id: scheme.bank_id
            });
        }
    }, [scheme, setData]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('crm.schemes.create'), {
            onFinish: () => reset(),
        });
    };
    return (

        <AppLayout>
            <Head title="Edit Scheme" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>Edit Scheme</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit}>
                        <div className="grid gap-4">
                            <div>
                                <div className="flex items-center">
                                    <Label>Title</Label>
                                </div>
                                <Input
                                    id="title"
                                    required
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Scheme Title"
                                />
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>Summary</Label>
                                </div>
                                <textarea
                                    className='border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-25 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                                    id="summary"
                                    required
                                    value={data.summary}
                                    onChange={(e) => setData('summary', e.target.value)}
                                    placeholder="Scheme Summary"
                                ></textarea>

                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>Description</Label>
                                </div>
                                <textarea
                                    className='border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-25 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                                    id="description"
                                    required
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Scheme Description"
                                ></textarea>

                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>
                                        Bank
                                    </Label>
                                </div>
                                <select
                                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    name="bank_id"
                                    id="bank_id"
                                    value={data.bank_id}
                                    onChange={(e) => setData('bank_id', e.target.value)}
                                >
                                    <option value="o">Select Bank</option>
                                    {banks.map((bank) => (
                                        <option value={bank.id}>{bank.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Label>Max Amount</Label>
                                </div>
                                <Input
                                    id="max_amount"
                                    type="number"
                                    value={data.max_amount}
                                    onChange={(e) => setData('max_amount', e.target.value)}
                                    placeholder="Maximum Amount"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Min Amount</Label>
                                </div>
                                <Input
                                    id="min_amount"
                                    type="number"
                                    value={data.min_amount}
                                    onChange={(e) => setData('min_amount', e.target.value)}
                                    placeholder="Minimum Amount"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Max CIBIL</Label>
                                </div>
                                <Input
                                    id="max_cibil"
                                    type="number"
                                    value={data.max_cibil}
                                    onChange={(e) => setData('max_cibil', e.target.value)}
                                    placeholder="Max CIBIL"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Min CIBIL</Label>
                                </div>
                                <Input
                                    id="min_cibil"
                                    type="number"
                                    value={data.min_cibil}
                                    onChange={(e) => setData('min_cibil', e.target.value)}
                                    placeholder="Min CIBIL"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Max Interest Rate</Label>
                                </div>
                                <Input
                                    id="max_interest_rate"
                                    type="number"
                                    step="0.01"
                                    value={data.max_interest_rate}
                                    onChange={(e) => setData('max_interest_rate', e.target.value)}
                                    placeholder="Max Interest Rate (%)"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Min Interest Rate</Label>
                                </div>
                                <Input
                                    id="min_interest_rate"
                                    type="number"
                                    step="0.01"
                                    value={data.min_interest_rate}
                                    onChange={(e) => setData('min_interest_rate', e.target.value)}
                                    placeholder="Min Interest Rate (%)"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Max Tenure</Label>
                                </div>
                                <Input
                                    id="max_tenure"
                                    type="number"
                                    value={data.max_tenure}
                                    onChange={(e) => setData('max_tenure', e.target.value)}
                                    placeholder="Max Tenure (Months)"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Min Tenure</Label>
                                </div>
                                <Input
                                    id="min_tenure"
                                    type="number"
                                    value={data.min_tenure}
                                    onChange={(e) => setData('min_tenure', e.target.value)}
                                    placeholder="Min Tenure (Months)"
                                />
                            </div>

                            <div>
                                <div className="flex items-center">
                                    <Label>Redirection Link</Label>
                                </div>
                                <Input
                                    id="redirection_link"
                                    value={data.redirection_link}
                                    onChange={(e) => setData('redirection_link', e.target.value)}
                                    placeholder="Redirection URL"
                                />
                            </div>

                            <Button type="submit" className="mt-4 w-48" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Save
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {/* You can add another footer action button here if needed */}
                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default CrmSchemeEdit
