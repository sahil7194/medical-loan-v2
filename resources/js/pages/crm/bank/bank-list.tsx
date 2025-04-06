import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const banks = [
    {
        id: 1,
        name: "Bank 1",
        created_at: "23/04/18",
    },
    {
        id: 2,
        name: "Bank 2",
        created_at: "23/04/18"
    },
    {
        id: 3,
        name: "Bank 3",
        created_at: "23/04/18"
    }
];

const CrmBankList = () => {
    return (
        <AppLayout>
            <Head title="Banks" />
            <div>
                <h1 className='bold'>
                    crm bank list
                </h1>
                <div className="flex flex-row-reverse w-1/2 m-2 mb-6">
                    <a
                    href='/crm/bank/create'
                    className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                        Add
                    </a>
                </div>
                <div className="mx-23 relative flex flex-col w-1/2 h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
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
                                        Created At
                                    </p>
                                </th>
                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500"></p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {banks.map((bank) => (
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {bank.name}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {bank.created_at}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <a href={"/crm/bank/" + bank.id + "/edit"} className="block text-sm font-semibold text-slate-800">
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default CrmBankList
