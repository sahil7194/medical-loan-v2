import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'

const CrmSchemeCreate = () => {
    return (
        <AppLayout>
            <Head title="Create New Scheme" />
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>
                        Create New Scheme
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label >Name</Label>
                                <Input id="name" placeholder="Name of Bank" readOnly />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button>
                        Save
                    </Button>
                </CardFooter>
            </Card>
        </AppLayout>
    )
}

export default CrmSchemeCreate
