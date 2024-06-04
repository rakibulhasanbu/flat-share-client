'use client'

import { useEffect, useState } from "react";
import { useAppSelector } from "../states/hook";
import { useEditProfileMutation, useGetProfileQuery } from "../states/features/user/userApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AppFormInput from "../components/ui/AppFormInput";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import ProtectedRoute from "../components/shared/ProtectedRoute";


interface FormData {
    name: string;
    username: string;
    email: string;
}

const Page = () => {
    const [loading, setLoading] = useState(false);
    const user = useAppSelector((state) => state.auth.user);
    const [editUser, { isLoading }] = useEditProfileMutation();
    const { data } = useGetProfileQuery("");

    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        await editUser(data)
            .unwrap()
            .then((res: any) => {
                if (!res.success) {
                    toast.error(res.message || "Something went wrongs");
                } else {
                    toast.success("Successfully profile saved");
                }
            })
            .catch((res: any) => {
                toast.error(res?.data?.message || "Something went wrong");
            });
    };

    useEffect(() => {
        if (data) {
            setValue("name", data?.data?.name);
            setValue("email", data?.data?.email);
            setValue("username", data?.data?.username);
        }
    }, [data, setValue]);

    return (
        <ProtectedRoute>
            <div className='container md:py-4 2xl:py-20 '>
                <h1 className="mt-2 text-3xl font-bold text-center capitalize pb-12 tracking-tight text-gray-900 md:text-4xl">{data?.data?.username} Profile</h1>
                <form
                    className="space-y-4 lg:space-y-5 2xl:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col md:flex-row justify-between gap-3">
                        {/* this is left side text  */}
                        <div className="text-textBlueBlack space-y-1">
                            <h3 className="font-semibold text-xl">Personal Information</h3>
                            <p className="text-textGrey text-sm">
                                Make adjustments to your personal <br /> information and save them.
                            </p>
                        </div>

                        {/* this is right side text  */}
                        <div className="w-full md:w-[40%] space-y-3">
                            <AppFormInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Type your name here"
                                register={register}
                                error={errors?.name}
                            />

                            <AppFormInput
                                label="Username"
                                name="username"
                                type="text"
                                placeholder="Type your user name here"
                                register={register}
                                error={errors?.username}
                            />

                            <AppFormInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="Type your email here"
                                register={register}
                                error={errors?.email}
                            />

                            <button
                                type="submit"
                                className="appBtn text-xs md:text-sm 2xl:text-base"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    <div className="border border-[#F2F4F7]"></div>

                    <div className="flex flex-col md:flex-row gap-3 justify-between">
                        {/* this is left side text  */}
                        <div className="text-textBlueBlack space-y-1">
                            <h3 className="font-semibold">Change  Your Password</h3>
                            <p className="text-textGrey text-sm">
                                Please press Change  password button and  <br /> go to Change  password page.
                            </p>
                        </div>

                        {/* this is right side text  */}
                        <div className="w-full md:w-[40%]">
                            <Link href={"/auth/change-password"}>
                                <button
                                    type="button"
                                    className="text-xs md:text-sm 2xl:text-base font-medium underline text-primary hover:text-white border hover:bg-primary border-primary px-4 py-2 rounded-full "
                                >
                                    Change  password
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </ProtectedRoute>
    );
};

export default Page;