import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const AgentProfile = () => {
  return (
    <AppLayout>
    <Head title="Agent Profile" />
    <Card className="w-1/2">
        <CardHeader>
            <CardTitle>
                Agent Profile
            </CardTitle>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label >Name</Label>
                        <Input id="name" placeholder="Name of your project" readOnly />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex justify-between">
            <a className='text-primary underline-offset-4 hover:underline' href='/agent/profile/update'>Edit</a>
        </CardFooter>
    </Card>
</AppLayout>
  )
}

export default AgentProfile
