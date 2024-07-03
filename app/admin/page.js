'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    let user = false;

    useEffect(() => {
        const isAuthenticated = true; 

        if (!isAuthenticated) {
            router.push('/login');
        }else if(isAuthenticated){
            router.push('admin/allMovies');
        }
    }, [router]);

    return (
        <>
        </>
    );
};

export default Page;
