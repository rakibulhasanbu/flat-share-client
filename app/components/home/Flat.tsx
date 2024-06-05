import { TFlat } from '@/app/types';
import { BiArea, BiBath, BiBed } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { PiResize } from 'react-icons/pi';

const Flat = ({ flat, status }: { flat: TFlat, status?: string }) => {
    return <div className='bg-white p-5 rounded-lg shadow-1 rounded-tl-[90px] w-full mx-auto cursor-pointer hover:shadow-2xl transition'>
        <img className='mb-8 rounded-tl-[90px] w-full max-h-[55dvh] rounded-br-[90px] rounded-tr-[10px] rounded-bl-[10px]' src={flat?.photos[0]} alt="" />
        <div className='mb-4 flex gap-x-2 text-sm'>
            <div className='bg-green-500 rounded-full px-3 text-white'>Adv: $ {flat?.advanceAmount}</div>
            <div className='bg-violet-500 rounded-full px-2 text-white flex items-center gap-1'><FaLocationDot />{flat?.location}</div>
        </div>

        <div className='text-lg font-semibold line-clamp-3'>{flat?.description}</div>
        <div className='flex gap-x-4 my-4'>
            <div className='flex items-center gap-1 text-gray-600'>
                <BiBed /> {flat?.totalBedrooms}
            </div>
            <div className='flex items-center gap-1 text-gray-600'>
                <MdOutlineBedroomParent /> {flat?.totalRooms}
            </div>
            <div className='flex items-center gap-1 text-gray-600'>
                <PiResize /> {flat?.squareFeet}
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='text-lg font-semibold text-violet-500 mb-4'>$ {flat?.amount}</div>
            <p className={`${status === "REJECTED" && "bg-red rounded-full px-3 py-1 text-white" || status === "APPROVED" && "bg-green-500 rounded-full px-3 py-1 text-white" || status === "PENDING" && "bg-gray-500 rounded-full px-3 py-1 text-white"}`}>{status}</p>
        </div>

    </div>;
};

export default Flat;
