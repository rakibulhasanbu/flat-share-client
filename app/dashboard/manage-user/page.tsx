'use client'

import AppModal from "@/app/components/ui/AppModal";
import AppTable from "@/app/components/ui/AppTable";
import { useEditProfileMutation, useEditUserMutation, useGetUsersQuery } from "@/app/states/features/user/userApi";
import { useState } from "react";
import { GoUnverified, GoVerified } from "react-icons/go";
import { MdBlock } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { toast } from "react-toastify";

const ManageUser = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const infoQuery = useGetUsersQuery("");

    const [updateUser] = useEditUserMutation();

    const handleBlockUser = async (id: string, value: any) => {
        const updateData = {
            id, isActive: value
        }
        await updateUser(updateData).unwrap().then((res: any) => {
            if (!res.success) {
                toast.error("User updated unsuccessful!", { toastId: 1 })
            }
            toast.success("User updated successful!", { toastId: 1 })
        }).catch((res: any) => {
            if (!res.success) {
                toast.error("User updated unsuccessful!", { toastId: 1 })
            }
        });
    }
    const handleChangeRole = async (id: string, value: any) => {

        const updateData = {
            id, role: value
        }
        await updateUser(updateData).unwrap().then((res: any) => {
            if (!res.success) {
                toast.error("User updated unsuccessful!", { toastId: 1 })
            }
            toast.success("User updated successful!", { toastId: 1 })
        }).catch((res: any) => {
            if (!res.success) {
                toast.error("User updated unsuccessful!", { toastId: 1 })
            }
        });
    }

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            className: "min-w-[150px]",
            render: (name: string, record: any) => {
                return (
                    <div className='flex items-center gap-1'>
                        <p className="cursor-pointer">{name}</p>
                    </div>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            className: "min-w-[150px]",
        },
        {
            title: "User Status",
            dataIndex: "isActive",
            className: "min-w-[115px]",
            render: (isActive: boolean) => {
                return (
                    <div className={`flex items-center gap-1 text-sm ${isActive ? "text-success" : "text-textDark"}`}>
                        {
                            isActive ? <RiVerifiedBadgeFill /> : <MdBlock />
                        }
                        {isActive ? "Activate " : "Deactivate"}
                    </div>
                );
            },
        },
        {
            title: 'Verification Status',
            dataIndex: 'isVerified',
            className: "min-w-[150px]",
            render: (isVerified: boolean) => {
                return (
                    <div className={`flex items-center gap-1 ${isVerified === true ? 'text-success' : "text-bgSecondary"}`}>
                        {
                            isVerified === true ? <GoVerified /> : <GoUnverified />
                        }
                        {isVerified === true ? "Verified" : "Unverified"}
                    </div>
                )
            }
        },
        {
            title: 'User Role',
            dataIndex: 'role',
            className: "min-w-[145px]",
            render: (role: string) => {
                return (
                    <div className={`flex items-center gap-1`}>
                        {role}
                    </div>
                )
            }
        },
        {
            title: 'Action',
            dataIndex: 'isActive',
            className: "min-w-[145px] flex items-center justify-center",
            render: (isActive: boolean, record: any) => {
                return (
                    <div className='flex items-center justify-evenly gap-4'>
                        <AppModal
                            button={
                                <button className="text-xs font-medium px-4 py-1 rounded-full bg-primary text-white">
                                    {record?.role === "USER" ? "Make Admin" : "Make User"}
                                </button>
                            }
                            cancelButtonTitle="No, Don’t"
                            primaryButtonTitle={`Yes. ${record?.role === "USER" ? "Make Admin" : "Make User"}`}
                            primaryButtonAction={() => handleChangeRole(record?.id, record?.role === "USER" ? "ADMIN" : "USER")}
                        >
                            <div className="max-w-80">
                                <p className="text-center text-[#828282] pt-4 text-lg">
                                    Are you sure {record?.role === "USER" ? "Make Admin" : "Make User"}{" "}
                                    <span className="text-textDark font-medium">
                                        {record?.name}
                                    </span>{" "}
                                    from the users list?
                                </p>
                            </div>
                        </AppModal>
                        <AppModal
                            button={
                                <button className="text-xs font-medium px-4 py-1 rounded-full bg-[#E6E6E7]">
                                    {record?.isActive ? "Deactivate" : "Activate"}
                                </button>
                            }
                            cancelButtonTitle="No, Don’t"
                            primaryButtonTitle={`Yes. ${record?.isActive ? "Deactivate" : "Activate"}`}
                            primaryButtonAction={() => handleBlockUser(record?.id, record?.isActive ? false : true)}
                        >
                            <div className="max-w-80">
                                <p className="text-center text-[#828282] pt-4 text-lg">
                                    Are you sure {record?.isActive ? "UnBlock" : "Block"}{" "}
                                    <span className="text-textDark font-medium">
                                        {record?.name}
                                    </span>{" "}
                                    from the users list?
                                </p>
                            </div>
                        </AppModal>
                    </div>
                )
            }
        },
    ];

    return (
        <AppTable
            columns={columns}
            infoQuery={infoQuery}
            onInputChange={(text) => setSearch(text)}
            setPage={setPage}
            headerText="Users List"
            inputPlaceholder="Search user"
            button={
                <button className="roundedBtn">New User</button>
            }
        />
    );
};

export default ManageUser;