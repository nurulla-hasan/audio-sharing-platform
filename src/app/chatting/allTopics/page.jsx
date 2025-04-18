"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';


const AllTopics = () => {

    const trendingData = [
        {
            id: 1,
            title: "Family Conversation",
            audioCount: "3k+ audio",
            image: "/trading1.png",
        },
        {
            id: 2,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 3,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 4,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 5,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 6,
            title: "Family Conversation",
            audioCount: "3k+ audio",
            image: "/trading1.png",
        },
        {
            id: 7,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 8,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 9,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 10,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
        {
            id: 11,
            title: "Friends Conversation",
            audioCount: "3k+ audio",
            image: "/trading2.png",
        },
        {
            id: 12,
            title: "Travel Conversation",
            audioCount: "3k+ audio",
            image: "/trading3.png",
        },
    ];

    return (

        <>
            <div className='my-5 px-5 md:px-8'>
                <div className=" md:flex flex-row gap-5 justify-between items-center">
                    <h1 className="text-xl text-[#1C4587] font-bold">Trending topics</h1>
                    <div className='flex gap-5 items-center justify-center mt-5'>
                        <div className="relative border border-[#1C4587] w-[45%] rounded-sm px-2 flex items-center">
                            <CiSearch className='absolute cursor-pointer ' color='#1C4587' size={16} />
                            <input
                                type="text"
                                placeholder="Search institute"
                                className="px-2 ml-3 text-sm py-1 lg:w-full rounded-full lg:py-1.5 border-none outline-none text-[#07398a]"
                            />
                        </div>
                        <motion.div
                            whileTap={{ scale: 0.99 }}
                            className="text-blue-500 font-semibold cursor-pointer flex-1 w-[45%]"
                        >
                            <button className="w-full cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-5 py-[8px] md:py-[9px] rounded-sm font-semibold text-xs lg:text-[12px]">
                                +Upload New Audio
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Cards */}
                <div className="mx-auto mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:justify-between justify-items-center items-center">
                    {trendingData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1C4587] w-full rounded-sm flex p-2 gap-3 items-center text-white"
                        >
                            <div>
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[150px] bg-white object-cover rounded-md"
                                />
                            </div>
                            <div>

                                <div>
                                    {/* Title */}
                                    <h3 className="text-xs font-semibold mb-1">{item.title}</h3>

                                    {/* Audio Count */}
                                    <p className="text-xs font-[300] mb-4">{item.audioCount}</p>

                                </div>
                                {/* Button */}
                                <Link href="/chatting/allTopics/familyConversion/audio">
                                    <button className="border mt-8 border-white px-3 py-1 rounded-sm hover:bg-white hover:text-[#1C4587] cursor-pointer text-xs bg-gradient-to-b from-[#1C4587] to-[#3279EA] transition">
                                        Listen Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllTopics;