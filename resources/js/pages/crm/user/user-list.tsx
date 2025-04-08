import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const CrmUserList = ({ users }) => {


    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div>
                <h1>
                    Crm User List
                </h1>
            </div>
            <div className="flex flex-row-reverse  m-2 mb-6 mx-23">
                    <a
                    href='/crm/users/create'
                    className="rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
                        Add
                    </a>
                </div>
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
                                    User Type
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {user.name}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {user.email}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {user.mobile}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {user.user_type}
                                        </p>
                                    </td>
                                    <td className="p-4 border-b border-slate-200">
                                        <div className="flex space-x-5">

                                            <a href={"/crm/users/"+user.slug+"/edit"} className="block text-sm font-semibold text-slate-800">
                                                Edit
                                            </a>
                                            <a href={"/crm/users/"+user.slug+"/delete"} className="block text-sm font-semibold text-slate-800">
                                                Delete
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </AppLayout>
    )
}

export default CrmUserList
