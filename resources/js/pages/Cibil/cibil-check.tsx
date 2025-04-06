import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const CibilCheck = () => {
    return (
        <AppLayout>
            <Head title="Check Cibil" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>
                        Check Cibil
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label >Name</Label>
                                <Input id="name" placeholder="Name of your project" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button >
                        Check Cibil
                    </Button>
                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default CibilCheck
