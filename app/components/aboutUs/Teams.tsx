const people = [
    {
        name: 'Andrea Piacquadio',
        role: 'Founder',
        imageUrl:
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Stefan Stefancik',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
        name: 'Leslie Alexander',
        role: 'Admin',
        imageUrl:
            'https://images.pexels.com/photos/1205405/pexels-photo-1205405.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },

    {
        name: 'Leslie Alexander',
        role: 'CTO',
        imageUrl:
            'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },

    {
        name: 'Leslie Alexander',
        role: 'Member',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

]

export default function Teams() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Flat-Share Leaders</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At FlatMate Connect, we’re proud to introduce the passionate individuals who drive our platform forward. Our leadership team is committed to creating a seamless experience for flat seekers and roommates alike. Let’s meet them:
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
