import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const  schemeData = {
    image: "https://picsum.photos/id/1/370/240",
    title: "Home Loan Scheme",
    description: "A flexible home loan scheme with competitive interest rates.",
    min_interest_rate: 5.5,
    max_interest_rate: 7.5,
    min_cibil: 650,
    max_cibil: 800,
    min_tenure: 5,
    max_tenure: 30,
    min_amount: 100000,
    max_amount: 5000000,
    created_at: "2025-04-06T12:00:00Z",
    slug: "home-loan-scheme"
  };

const scheme = () => {
  return (
    <AppLayout>
            <Head title={schemeData.title} />
            <Card className="w-full max-w-4xl mx-auto p-6">
      {/* Image Section */}
      <CardHeader className="mb-10">
        <img
          src={schemeData.image}
          alt="scheme-details"
          className="w-full h-72 object-cover rounded-lg shadow-lg"
        />
      </CardHeader>

      {/* Scheme Title and Info Section */}
      <CardHeader>
        <CardTitle className="text-4xl font-semibold text-gray-800 dark:text-white">
          {schemeData.title}
        </CardTitle>
        <CardDescription className="flex justify-center space-x-6 mb-8 text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V5.236l7 3.236V7L12 4 3 7v1.472L10 5.236V11h7V7l-7-3.236z"
              />
            </svg>
            <span className="ml-2 text-sm">
              {new Date(schemeData.created_at).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-7">
          {schemeData.description}
        </p>

        {/* Scheme Details Section */}
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label>Interest Rates</Label>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Min: {schemeData.min_interest_rate}% | Max: {schemeData.max_interest_rate}%
              </p>
            </div>

            <div>
              <Label>CIBIL Score</Label>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Min: {schemeData.min_cibil} | Max: {schemeData.max_cibil}
              </p>
            </div>

            <div>
              <Label>Tenure</Label>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Min: {schemeData.min_tenure} months | Max: {schemeData.max_tenure} months
              </p>
            </div>

            <div>
              <Label>Loan Amount</Label>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Min: ₹{schemeData.min_amount} | Max: ₹{schemeData.max_amount}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Apply Button Section */}
      <CardFooter className="flex justify-center mt-10">
        <a

          href={`/schemes-applicant/${schemeData.slug}/apply`}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Apply Now
        </a>
      </CardFooter>
    </Card>
        </AppLayout>
  )
}

export default scheme
