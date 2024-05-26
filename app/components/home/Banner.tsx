'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
    return (
        <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
                    Better every day
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    Find Your Perfect Space!
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Welcome to our flat-sharing community! Whether you’re a student, young professional, or digital nomad, we’ve got the ideal space waiting for you. Discover shared apartments, cozy rooms, and friendly flatmates. It’s more than just a place to stay—it’s where memories are made.
                </p>
                <Link href={'/add-flat'}>
                    <button className="appBtn">
                        Share Your Flat
                    </button>
                </Link>
            </div>
            <ShuffleGrid />
        </section>
    );
};

const shuffle = (array: (typeof squareData)[0][]) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1464890100898-a385f744067f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 4,
        src: "https://plus.unsplash.com/premium_photo-1680100256127-e73d3f1f3376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 5,
        src: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsYXR8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 6,
        src: "https://plus.unsplash.com/premium_photo-1684175656278-3759b542bb21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZsYXR8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 7,
        src: "https://plus.unsplash.com/premium_photo-1683121158319-acc40c6ef3b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZsYXR8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1616137148650-4aa14651e02b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 15,
        src: "https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef<any>(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Banner;