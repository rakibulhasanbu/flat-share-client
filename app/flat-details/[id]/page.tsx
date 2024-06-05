'use client'

import AppFormInput from '@/app/components/ui/AppFormInput';
import { useBookingFlatMutation, useGetFlatByIdQuery } from '@/app/states/features/flat/flatApi';
import { Carousel } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';
import { toast } from 'react-toastify';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

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
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

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
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
