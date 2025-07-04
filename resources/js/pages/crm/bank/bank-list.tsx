import DateFormatter from '@/components/ui/date-formater'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'


const CrmBankList = ({ banks }) => {

    return (
        <AppLayout>
            <Head title="Banks" />
            <div>
                <h1 className='bold'>
                    crm bank list
                </h1>
                <div className="flex flex-row-reverse  m-2 mb-6 mx-23">
                    <a
                        href='/crm/bank/create'
                        className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                        Add
                    </a>
                </div>
                <div className="mx-23 relative flex flex-col  h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
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
                                        Vendor Code
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
                                <tr key={bank.id} className="hover:bg-slate-50">
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {bank.name}
                                        </p>
                                    </td>

                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {bank.vendor_code}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            <DateFormatter date={bank.created_at}/>
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">

                                        <div className="flex space-x-5">

                                            <a
                                                href={"/crm/bank/" + bank.slug + "/edit"}
                                                className="block text-sm font-semibold text-slate-800">
                                                Edit
                                            </a>

                                            <a
                                                href={"/crm/bank/" + bank.slug + "/delete"}
                                                className="block text-sm font-semibold text-slate-800">
                                                Delete
                                            </a>

                                        </div>
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
