import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const Contact = () => {
  return (
    <AppLayout>
            <Head title="Dashboard" />
            <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                We are available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  (123) 34567890
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href="" className="underline">
                    your-email@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label >First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label >Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label >Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label >Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label >Message</Label>
              <textarea placeholder="Type your message here."
                className='border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-23 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
              ></textarea>
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
        </AppLayout>
  )
}

export default Contact
