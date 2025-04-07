import { Card, CardContent } from '@/components/ui/card'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'


const blog = ({blog}) => {

    return (
        <AppLayout>
            <Head title={blog.title} />
            <Card className="overflow-hidden lg:max-w-[1250px] mx-auto w-full">
                <CardContent>
                    {/* Image Section */}
                    <div className="mb-10">
                        <img
                            src={blog.image}
                            alt="blog-details"
                            className="object-center w-full object-cover"
                        />
                    </div>

                    {/* Title Section */}
                    <div className="mx-auto w-full max-w-[770px] text-center">
                        <h1 className="mb-5 text-[28px] font-semibold leading-tight text-black dark:text-white sm:text-[32px]">
                            {blog.title}
                        </h1>

                        {/* Metadata Section */}
                        <div className="mb-9 flex flex-wrap items-center justify-center">
                            <div className="mb-2 inline-flex items-center px-3">
                                <p className="text-base font-medium text-body">By {blog.user.name}</p>
                            </div>

                            <div className="mb-2 inline-flex items-center px-3">
                                <p className="flex items-center text-base font-medium text-body">
                                    <span className="mr-2">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_59_156)">
                                                <path
                                                    d="M15.5833 2.74984H19.2499C19.493 2.74984 19.7262 2.84641 19.8981 3.01832C20.07 3.19023 20.1666 3.42339 20.1666 3.6665V18.3332C20.1666 18.5763 20.07 18.8094 19.8981 18.9814C19.7262 19.1533 19.493 19.2498 19.2499 19.2498H2.74992C2.5068 19.2498 2.27365 19.1533 2.10174 18.9814C1.92983 18.8094 1.83325 18.5763 1.83325 18.3332V3.6665C1.83325 3.42339 1.92983 3.19023 2.10174 3.01832C2.27365 2.84641 2.5068 2.74984 2.74992 2.74984H6.41658V0.916504H8.24992V2.74984H13.7499V0.916504H15.5833V2.74984ZM13.7499 4.58317H8.24992V6.4165H6.41658V4.58317H3.66659V8.24984H18.3333V4.58317H15.5833V6.4165H13.7499V4.58317ZM18.3333 10.0832H3.66659V17.4165H18.3333V10.0832Z"
                                                    fill="#79808A"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_59_156">
                                                    <rect width="22" height="22" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    {new Date(blog.created_at).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
                                </p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="text-left">
                            <p className="mb-9 text-base text-body leading-5">
                                {blog.content}
                            </p>
                        </div>
                    </div>
                </CardContent>

                {/* Optional Tags Section (if needed) */}
                {/*
        <div className="flex flex-wrap">
          <div className="w-full px-3 sm:w-7/12">
            <p className="mb-4 text-base text-body">Popular Tags:</p>
            <div className="flex flex-wrap items-center">
              <a href="#" className="mr-3 mb-3 inline-flex h-9 items-center justify-center rounded bg-[#F8FAFB] px-[18px] text-sm font-semibold text-body hover:bg-primary hover:text-white dark:bg-[#15182A] dark:text-white dark:hover:bg-primary">Design</a>
              <a href="#" className="mr-3 mb-3 inline-flex h-9 items-center justify-center rounded bg-[#F8FAFB] px-[18px] text-sm font-semibold text-body hover:bg-primary hover:text-white dark:bg-[#15182A] dark:text-white dark:hover:bg-primary">Development</a>
              <a href="#" className="mr-3 mb-3 inline-flex h-9 items-center justify-center rounded bg-[#F8FAFB] px-[18px] text-sm font-semibold text-body hover:bg-primary hover:text-white dark:bg-[#15182A] dark:text-white dark:hover:bg-primary">UI/UX</a>
            </div>
          </div>
        </div>
      */}
            </Card>
        </AppLayout>
    )
}

export default blog
