'use client'


import AppModal from "@/app/components/ui/AppModal";
import AppTable from "@/app/components/ui/AppTable";
import { useDeleteFlatMutation, useGetFlatsQuery, useGetMyFlatsQuery } from "@/app/states/features/flat/flatApi";
import { formatDate } from "@/app/utils/formateDate";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const Flats = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")

    const queryString = useMemo(() => {
        const info = {
            brand: "",
            limit: 10,
            page,
            searchTerm: search.length ? search : undefined,
        };
        const queryString = Object.keys(info).reduce((pre, key: string) => {
            const value = info[key as keyof typeof info];
            if (value) {
                return pre + `${Boolean(pre.length) ? "&" : ""}${key}=${value}`;
            }
            return pre;
        }, "");
        return queryString;
    }, [page, search]);

    const infoQuery = useGetFlatsQuery(queryString);

    const [deleteFlat, { isError, error, isLoading, isSuccess }] = useDeleteFlatMutation();

    useEffect(() => {
        if (isError) {
            toast.error("Flat delete unsuccessful!");
        } else if (!isLoading && isSuccess) {
            toast.success('Flat deleted Successful!')
        }
    }, [isError, error, isLoading, isSuccess])

    const columns = [
        {
            title: 'Location',
            dataIndex: 'location',
            className: "min-w-[150px]",
            render: (location: string, record: any) => {
                return (
                    <div className='flex items-center gap-1'>
                        <img src={record?.photos[0]} alt="" className="rounded-md object-cover w-16 h-10" />
                        <p className="line-clamp-1">{location}</p>
                    </div>
                )
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            className: "min-w-[205px]",
            render: (description: string) => {
                return (
                    <p className="line-clamp-1 max-w-[30dvw]">{description}</p>
                )
            }
        },
        {
            title: 'Author Name',
            dataIndex: 'postedBy',
            className: "min-w-[105px]",
            render: (postedBy: any) => {
                return (
                    <p className="line-clamp-1">{postedBy?.name}</p>
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
                        <button className="text-xs font-medium px-4 py-1 rounded-full bg-[#E6E6E7] hover:text-gray-800 "><Link href={`/dashboard/edit-flat/${record?.id}`}>Edit Flat</Link></button>

                        <AppModal button={
                            <button className="text-xs text-white px-4 py-1 rounded-full w-full bg-red">Remove</button>}
                            cancelButtonTitle="No, Don’t"
                            primaryButtonTitle="Yes. Remove"
                            primaryButtonAction={() => deleteFlat(record?.id)}
                        >
                            <div className='max-w-80'>
                                <p className="text-center text-[#828282] pt-4 text-lg">Are you sure  Remove this flat from the Flat list?</p>
                            </div>
                        </AppModal>
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
                dataCount={3}
                onInputChange={(text) => setSearch(text)}
                headerText="Flats List"
                button={
                    <Link href={"/dashboard/add-flat"}>
                        <button className="roundedBtn">Add New Flat</button>
                    </Link>
                }
            />
        </>
    );
};

export default Flats;