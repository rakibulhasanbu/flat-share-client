import { CgCommunity, CgDetailsMore } from "react-icons/cg"
import { IoIosLock } from "react-icons/io"
import { MdVerified } from "react-icons/md"

const features = [
    {
        name: 'Verified Listings',
        description:
            'Browse through hundreds of verified and up-to-date listings. We ensure that all properties are accurately represented and meet our quality standards.',
        icon: MdVerified,
    },
    {
        name: 'Detailed Profiles',
        description:
            'Get to know potential flatmates before you move in. Our comprehensive profiles include personal interests, habits, and preferences to help you make an informed decision.',
        icon: CgDetailsMore,
    },
    {
        name: 'Easy Communication',
        description:
            'Connect with potential flatmates effortlessly through our built-in messaging system. Schedule viewings, ask questions, and arrange meet-ups with ease.',
        icon: CgCommunity,
    },
    {
        name: 'Safe and Secure',
        description:
            'Your safety is our priority. We employ strict security measures to protect your personal information and ensure a trustworthy community.',
        icon: IoIosLock,
    },
]

export default function FeaturedSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-primary">Find Your Perfect Match</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    Effortlessly connect and arrange viewings with potential flatmates.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Browse through hundreds of verified and up-to-date listings. We ensure that all properties are accurately represented and meet our quality standards.
                </p>
            </div>
            <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
