'use client'

import Link from 'next/link';
import { ImSpinner2 } from 'react-icons/im'
import Flat from './Flat';
import { useGetFlatsQuery } from '@/app/states/features/flat/flatApi';
import { TFlat } from '@/app/types';
import { useMemo, useState } from 'react';
import AppInput from '../ui/AppInput';
import { IoBedOutline } from 'react-icons/io5';
import { AiOutlineDollarCircle } from 'react-icons/ai';


const FlatList = () => {
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [totalBedrooms, setTotalBedrooms] = useState(0)

    const queryString = useMemo(() => {
        const info = {
            searchTerm: search.length ? search : undefined,
            totalBedrooms: totalBedrooms > 0 ? totalBedrooms : undefined,
            minPrice: minPrice > 0 ? minPrice : undefined,
            maxPrice: maxPrice > 0 ? maxPrice : undefined,
        };
        const queryString = Object.keys(info).reduce((pre, key: string) => {
            const value = info[key as keyof typeof info];
            if (value) {
                return pre + `${Boolean(pre.length) ? "&" : ""}${key}=${value}`;
            }
            return pre;
        }, "");
        return queryString;
    }, [maxPrice, minPrice, search, totalBedrooms]);

    const { data, isLoading } = useGetFlatsQuery(queryString);

    if (isLoading) {
        return (
            <ImSpinner2 className='text-6xl mt-40 text-violet-700 animate-spin mx-auto' />
        )
    }

    // if nothing data found
    if (data?.data?.length < 1) {
        return (<div className='text-center text-3xl text-gray-400 font-semibold '> Sorry, nothing data found.</div>)
    }
    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }
    const handleTotalBedrooms = (e: any) => {
        setTotalBedrooms(e.target.value)
    }
    const handleMInPrice = (e: any) => {
        setMinPrice(e.target.value)
    }
    const handleMaxPrice = (e: any) => {
        setMaxPrice(e.target.value)
    }
    return (
        <section className='my-10 container'>
            <div className='flex flex-col md:flex-row items-center gap-6'>
                <AppInput
                    type='text'
                    value={search}
                    onChange={handleSearch}
                    placeholder='Search here flat locations'
                />
                <AppInput
                    icon={<IoBedOutline />}
                    type='number'
                    value={totalBedrooms}
                    onChange={handleTotalBedrooms}
                    placeholder='Search Number of bed rooms'
                />
                <div className='flex items-center gap-6'>
                    <AppInput
                        icon={<AiOutlineDollarCircle />}
                        type='number'
                        value={minPrice}
                        onChange={handleMInPrice}
                        placeholder='Min price'
                    />
                    <AppInput
                        icon={<AiOutlineDollarCircle />}
                        type='number'
                        value={maxPrice}
                        onChange={handleMaxPrice}
                        placeholder='Max price'
                    />
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-8 md:pt-8'>
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
