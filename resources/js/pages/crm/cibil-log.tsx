import DateFormatter from '@/components/ui/date-formater'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const CrmCibilLog = ({ logs }) => {

    return (
        <AppLayout>
            <Head title="Cibil log" />
            <div>
                <h1>
                    cibil log
                </h1>
                <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Name
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Email
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Mobile
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Pan Card
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Score
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Vendor
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500">
                                        Created At
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                logs.map((log) => (

                                    <tr key={log.id} className="hover:bg-slate-50">
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                {log.name}
                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                {log.email}

                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                {log.mobile}

                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                {log.pan_card}

                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                {log.score}

                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                {log.vendor}

                                            </p>
                                        </td>
                                        <td className="p-4 border-b border-slate-200">
                                            <p className="block text-sm text-slate-800">
                                                <DateFormatter date={log.created_at}/>
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

export default CrmCibilLog
