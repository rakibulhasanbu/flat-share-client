'use client'


import AppModal from "@/app/components/ui/AppModal";
import AppPopover from "@/app/components/ui/AppPopover";
import AppTable from "@/app/components/ui/AppTable";
import { useGetBookingFlatsQuery, useUpdateBookingFlatMutation } from "@/app/states/features/flat/flatApi";
import { BookingStatus } from "@/app/types";
import { formatDate } from "@/app/utils/formateDate";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingFlats = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")

    const infoQuery = useGetBookingFlatsQuery("");
    const [updateBookingFlat] = useUpdateBookingFlatMutation();


    const handleChangeStatus = async (id: string, value: any) => {

        const updateData = {
            id, BookingFlatData: { status: value }
        }
        console.log(updateData.BookingFlatData);
        await updateBookingFlat(updateData).unwrap().then((res: any) => {
            console.log(res);
            toast.success("User updated successful!", { toastId: 1 })
        }).catch((res: any) => {
            console.log(res);
            if (!res.success) {
                toast.error("User updated unsuccessful!", { toastId: 1 })
            }
        });
    }

    const columns = [
        {
            title: 'Location',
            dataIndex: 'location',
            className: "min-w-[150px]",
            render: (location: string, record: any) => {
                return (
                    <div className='flex items-center gap-1'>
                        <img src={record?.flat?.photos[0]} alt="" className="rounded-md object-cover w-16 h-10" />
                        <p className="line-clamp-1">{location}</p>
                    </div>
                )
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            className: "min-w-[205px]",
            render: (description: string, record: any) => {
                return (
                    <p className="line-clamp-1 max-w-[30dvw]">{record?.flat?.description}</p>
                )
            }
        },
        {
            title: 'Author Name',
            dataIndex: 'postedBy',
            className: "min-w-[105px]",
            render: (postedBy: any, record: any) => {
                return (
                    <p className="line-clamp-1">{record?.user?.name}</p>
                )
            }
        },
        {
            title: 'Status',
            dataIndex: 'status',
            className: "min-w-[105px]",
            render: (status: any, record: any) => {
                return (
                    <p className="line-clamp-1">{status}</p>
                )
            }
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            className: "min-w-[115px]",
            render: (date: string) => {
                return (
                    <p className="line-clamp-1">{formatDate(date)}</p>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: '',
            className: "min-w-[185px]",
            render: (_text: any, record: any) => {
                return (
                    <div className='flex items-center gap-8'>
                        <AppPopover
                            button={<button className="rounded-full py-1 px-3 text-sm bg-gray-200 text-textDarkGrey">{record?.status}</button>}
                        >
                            <div className="flex flex-col items-end justify-end">
                                <AppModal
                                    button={
                                        <button>
                                            {BookingStatus.APPROVED}
                                        </button>
                                    }
                                    cancelButtonTitle="No, Don’t"
                                    primaryButtonTitle={`Yes. ${BookingStatus.APPROVED}`}
                                    primaryButtonAction={() => handleChangeStatus(record?.id, BookingStatus.APPROVED)}
                                >
                                    <div className="max-w-80">
                                        <p className="text-center text-[#828282] pt-4 text-lg">
                                            Are you sure  {BookingStatus.APPROVED}{" "}
                                            <span className="text-textDark font-medium">
                                                {record?.name}
                                            </span>{" "}
                                            from the champions list?
                                        </p>
                                    </div>
                                </AppModal>
                                <AppModal
                                    button={
                                        <button>
                                            {BookingStatus.REJECTED}
                                        </button>
                                    }
                                    cancelButtonTitle="No, Don’t"
                                    primaryButtonTitle={`Yes. ${BookingStatus.REJECTED}`}
                                    primaryButtonAction={() => handleChangeStatus(record?.id, BookingStatus.REJECTED)}
                                >
                                    <div className="max-w-80">
                                        <p className="text-center text-[#828282] pt-4 text-lg">
                                            Are you sure  {BookingStatus.REJECTED}
                                            <span className="text-textDark font-medium">
                                                {record?.name}
                                            </span>{" "}
                                            from the champions list?
                                        </p>
                                    </div>
                                </AppModal>

                            </div>
                        </AppPopover>

                    </div>
                )
            }
        },
    ];

    return (
        <>
            <AppTable
                columns={columns}
                infoQuery={infoQuery}
                setPage={setPage}
                onInputChange={(text) => setSearch(text)}
                headerText="Requested Flats List"
                button={
                    <Link href={"/"}>
                        <button className="roundedBtn">Add New Request</button>
                    </Link>
                }
            />
        </>
    );
};

export default BookingFlats;