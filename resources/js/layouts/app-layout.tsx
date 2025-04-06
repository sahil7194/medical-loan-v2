// import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children }: AppLayoutProps) => (
    <>
        <Header />
        <div className="p-14">
            {children}
        </div>
        <Footer />
    </>
);
