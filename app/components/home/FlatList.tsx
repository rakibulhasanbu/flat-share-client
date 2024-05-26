'use client'

import Link from 'next/link';
import { ImSpinner2 } from 'react-icons/im'
import Flat from './Flat';
import { useGetFlatsQuery } from '@/app/states/features/flat/flatApi';


const FlatList = () => {
    const { data, isLoading } = useGetFlatsQuery("");

    if (isLoading) {
        return (
            <ImSpinner2 className='text-6xl mt-40 text-violet-700 animate-spin mx-auto' />
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
                    data && data?.data?.data?.map((flat: TFlat) => {
                        return (
                            <Link key={flat?.id} href={`/flat-details/${flat?.id}`}>
                                <Flat flat={flat} />
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default FlatList;
