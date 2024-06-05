'use client'

import { logOut } from "@/app/states/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/states/hook";
import { USER_ROLE } from "@/app/types";
import { link } from "fs";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logOut());
        toast.success("Logout successfully");
    };

    const navLinks = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "About Us",
            path: "/about-us"
        },
    ]

    return (
        <div className='bg-white text-black'>
            <div className='container px-4 lg:px-0 flex items-center justify-between py-3 md:py-6'>
                <Link href={"/"} className="flex items-center gap-2">
                    <img src="/assets/logo.png" alt="" className="size-9" />
                    <h2 className="font-bold text-3xl">Flat Share</h2>
                </Link>
                <div className='flex items-center text-lg gap-8 font-medium'>
                    {navLinks?.map((nav) => (
                        <Link key={nav.label} href={nav.path}>
                            {nav.label}
                        </Link>
                    ))}
                    {
                        user?.email &&
                        <Link href={'/requested-flats'}>
                            My Requested Flats
                        </Link>
                    }
                    {
                        user?.email &&
                        <Link href={'/profile'}>
                            My Profile
                        </Link>
                    }
                    {
                        user?.role === "ADMIN" &&
                        <Link href={'/dashboard'}>
                            Dashboard
                        </Link>
                    }
                    {/* <h3>{user?.userName}</h3> */}
                    {
                        user?.email ?
                            <button className="appBtn bg-red/80 hover:bg-red" onClick={handleLogout}>Logout</button>
                            :
                            <Link href={'/auth/sign-in'}>
                                <button className="appBtn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;