import Link from "next/link";

export default function PromoSection() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative container px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Light-Filled Spaces
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Bright interiors with large windows and airy vibes. Imagine waking up to sunlight streaming through your bedroom window.
                        </p>
                    </div>
                    <div className="mt-10">
                        {/* Decorative image grid */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                <div className="flex items-center space-x-6 lg:space-x-8">
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                            <img
                                                src="https://images.pexels.com/photos/16583508/pexels-photo-16583508/free-photo-of-close-up-of-residential-buildings-with-white-facades.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/4916281/pexels-photo-4916281.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/18302453/pexels-photo-18302453/free-photo-of-apartments-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/7031723/pexels-photo-7031723.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/14989325/pexels-photo-14989325/free-photo-of-blocks-of-flats.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/10586260/pexels-photo-10586260.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                                            <img
                                                src="https://images.pexels.com/photos/10003490/pexels-photo-10003490.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt=""
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href={"/"}>
                            <button className="appBtn">Booking Flat</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
