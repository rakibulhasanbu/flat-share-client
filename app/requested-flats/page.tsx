'use client'

import Link from 'next/link';
import { ImSpinner2 } from 'react-icons/im'
import { useGetMyBookingFlatsQuery } from '@/app/states/features/flat/flatApi';
import Flat from '../components/home/Flat';


const RequestedFlatList = () => {
    const { data, isLoading } = useGetMyBookingFlatsQuery("");

    if (isLoading) {
        return (
            <ImSpinner2 className='text-6xl my-40 text-violet-700 animate-spin mx-auto' />
        )
    }

    // if nothing data found
    if (data?.data?.length < 1) {
        return (<div className='text-center text-3xl text-gray-400 font-semibold '> Sorry, nothing data found.</div>)
    }

    return (
        <section className='my-10 container'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-8'>
                {
                    data && data?.data?.map((flat: any) => {
                        return (
                            <Link key={flat?.id} href={`/flat-details/${flat?.flat?.id}`}>
                                <Flat flat={flat?.flat} status={flat?.status} />
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default RequestedFlatList;
