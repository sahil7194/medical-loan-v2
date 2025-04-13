import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; // Import CircularProgressBar


const CibilResult = ({cibil}) => {

    console.log(cibil);

    const scorePercentage = cibil.score ? (cibil.score / 900) * 100 : 0;


  return (
    <AppLayout>
            <Head title="Dashboard" />
            <Card className="w-1/2 mt-8">
            <CardHeader>
                <CardTitle>CIBIL Score Details</CardTitle>
            </CardHeader>
            <CardContent>
                {cibil.score === null ? (
                    <p className="text-center text-muted">CIBIL Score not available yet</p>
                ) : (
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4">
                            {/* Circular Progress Bar */}
                            <CircularProgressbar
                                value={scorePercentage}
                                text={`${cibil.score}`}
                                styles={buildStyles({
                                    pathColor: `#4caf50`, // Green color for the path
                                    textColor: `#000000`, // Black color for the score text
                                    trailColor: '#d6d6d6', // Light gray for the trail
                                    textSize: '32px', // Text size inside the progress circle
                                })}
                            />
                        </div>
                        <p className="text-muted mt-2">Your current CIBIL score</p>
                    </div>
                )}

                {/* <div className="mt-4">
                    <p><strong>User Details:</strong></p>
                    <div className="flex flex-col items-center mt-2">
                        <p><strong>Name:</strong> {fullName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Mobile:</strong> {mobile}</p>
                    </div>
                </div> */}
            </CardContent>
        </Card>
        </AppLayout>
  )
}

export default CibilResult
