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
        <div className="px-34 py-10">
            {children}
        </div>
        <Footer />
    </>
);
