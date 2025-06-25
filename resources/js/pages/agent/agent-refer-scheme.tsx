import { Button } from '@/components/ui/button'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { toast } from 'react-toastify'

const AgentReferScheme = ({ schemes, vendor_code }) => {

    const refer = (scheme) => {

        const referUrl = `${scheme.app_url}?vendor_code=${vendor_code}`;


        navigator.clipboard.writeText(referUrl)
            .then(() => {

                let message: string = "";

                message += `You have Copied  ${scheme.title} scheme url`;

                console.log(referUrl)

                toast.success(message);
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    }
    return (
        <AppLayout>
            <Head title="Refer Scheme" />
            <div>
                <h1>
                    Refer Scheme
                </h1>
                <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Title
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Summary
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Bank
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Refer
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {schemes.map((scheme) => (
                                <tr key={scheme.id} className="hover:bg-slate-50">
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800 max-w-xs break-words">
                                            {scheme.title}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800 max-w-xs break-words">
                                            {scheme.summary}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {scheme?.bank?.name}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            <Button
                                                variant="outline"
                                                asChild className="w-full"
                                                onClick={() => refer(scheme)}
                                            >
                                                <a >Refer</a>
                                            </Button>
                                        </p>
                                    </td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default AgentReferScheme
