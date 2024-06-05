'use client'

import AppFormInput from '@/app/components/ui/AppFormInput';
import { useBookingFlatMutation, useGetFlatByIdQuery } from '@/app/states/features/flat/flatApi';
import { Carousel } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'react-toastify';

type TInputs = {
    message: string;
};

export default function FlatDetails() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TInputs>();

    const router = useRouter();
    const { id } = useParams();

    const { data, isLoading, isError } = useGetFlatByIdQuery(id);
    const [bookingFlat, { isLoading: flatBookingLoading }] = useBookingFlatMutation()
    console.log(data);
    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        const submitData = {
            ...data, flatId: id
        }

        await bookingFlat(submitData).unwrap().then((res: { success: any; message: any; }) => {
            console.log(res);
            toast.success("Booking are added successfully!", { toastId: 1 });
            router.push('/');
        }).catch((res: { success: any; message: any; }) => {
            console.log(res);
            toast.error(res.message || "Something went wrong", { toastId: 1 });
        });
    }

    if (isLoading || isError) {
        return (
            <ImSpinner2 className='text-6xl mt-40 text-violet-700 animate-spin mx-auto' />
        )
    }

    return (
        <div className="bg-white container">
            <div className="pt-6">

                {/* Image carousel */}
                <Carousel autoplay>
                    {
                        data?.data.photos?.map((img: string) => (
                            <div key={img} className='max-h-[70dvh] rounded-md'>
                                <img src={img} alt='carousel image' className='h-full w-full object-cover rounded-md' />
                            </div>
                        ))
                    }
                </Carousel>


                {/* Product info */}
                <div className="pb-16 pt-10 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Flat share details</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <p className="text-3xl tracking-tight text-gray-900">${data?.data?.amount}</p>

                        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                            <AppFormInput
                                name='message'
                                label='Message'
                                register={register}
                                type='text'
                            />

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary"
                            >
                                Booking Flat
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{data?.data.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Amenities</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {data?.data?.amenities.map((amn: string) => (
                                        <li key={amn} className="text-gray-400">
                                            <span className="text-gray-600">{amn}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <h2 className="text-sm font-medium text-gray-900"><span className='text-base'>Location: </span> {data?.data?.location}</h2>
                            <h2 className="text-sm font-medium text-gray-900"><span className='text-base'>Square Feet: </span> {data?.data?.squareFeet}</h2>
                            <h2 className="text-sm font-medium text-gray-900"><span className='text-base'>Total Bedrooms: </span> {data?.data?.totalBedrooms}</h2>
                            <h2 className="text-sm font-medium text-gray-900"><span className='text-base'>Total Rooms: </span> {data?.data?.totalRooms}</h2>
                            <h2 className="text-sm font-medium text-gray-900"><span className='text-base'>Advance Amount: </span> {data?.data?.advanceAmount}</h2>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
