import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; // Import CircularProgressBar


const CibilResult = ({ cibil }) => {

    const scorePercentage = cibil.score ? (cibil.score / 900) * 100 : 0;

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <Card className="w-full md:w-1/2 mt-8 mx-auto">
                <CardHeader>
                    <CardTitle>CIBIL Score Details</CardTitle>
                </CardHeader>
                <CardContent>
                    {cibil.score === null ? (
                        <p className="text-center text-muted">CIBIL Score not available yet</p>
                    ) : (
                        <div className="text-center">
                            <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                                <CircularProgressbar
                                    value={scorePercentage}
                                    text={`${cibil.score}`}
                                    strokeWidth={12}
                                    styles={buildStyles({
                                        pathColor: '#4caf50',
                                        textColor: '#000000',
                                        trailColor: '#d6d6d6',
                                        textSize: '28px',
                                    })}
                                />
                            </div>
                            <p className="text-muted mt-2">Your current CIBIL score</p>
                        </div>
                    )}

                    <div className="mt-6">
                        <p className="font-semibold mb-2">User Details:</p>
                        <div className="flex flex-col gap-1">
                            <p><strong>Name:</strong> {cibil.name}</p>
                            <p><strong>Email:</strong> {cibil.email}</p>
                            <p><strong>Mobile:</strong> {cibil.mobile}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </AppLayout>
    )
}

export default CibilResult
