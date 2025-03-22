
import { FaCirclePlay } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import AudioPlayer from "./AudioPlayer";

const FavoriteAudio = () => {
    const data = [
        {
            id: 1,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 2,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 3,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 4,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 5,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 6,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 7,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
        {
            id: 8,
            title: "Family Conversation",
            plays: "3.5k",
            rating: "5",
            tags: ["Family", "Travel"],
            duration: "02:20min",
            image: "/mostPlayed.png",
        },
    ];

    return (
        <div>
            <div className="xl:w-6/9 lg:w-5/6 mx-auto py-10 flex flex-col gap-8 justify-between xl:h-[calc(100vh-235px)] px-5 xl:px-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-scroll hide-scrollbar">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="relative flex-shrink-0 mx-auto w-full lg:px-0 px-5 lg:w-72 rounded-lg group"
                        >
                            {/* Image Container */}
                            <div className="relative h-40 overflow-hidden rounded-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition duration-300 group-hover:blur-xs"
                                />

                                <div className="absolute top-2 left-2 text-white font-bold cursor-pointer">
                                    <CiHeart size={20} />
                                </div>

                                {/* Play Icon (Hidden before hover) */}
                                <div className="absolute bottom-2 left-2 rounded-full text-[#1C4587] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <FaCirclePlay size={50} />
                                </div>

                                {/* Menu Icon (Hidden before hover) */}
                                <div className="absolute top-0 right-2 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-90 cursor-pointer">
                                    <CiMenuKebab size={22} className="text-white" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-1">
                                <div className="flex justify-between">
                                    <h2 className="text-[12px] font-semibold text-blue-900">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-1">
                                        <div className="flex items-center gap-1">
                                            <LuEye size={12} color="#6F6F6F" />
                                            <p className="text-[12px] text-gray-600">{item.plays}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaRegStar size={12} color="#d8ad00" />
                                            <p className="text-[12px] text-gray-600">{item.rating}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 flex justify-between items-center">
                                    <div className="flex items-center gap-1 *:px-[4px] *:py-[1px] *:rounded-xs">
                                        {item.tags.map((tag, index) => (
                                            <p
                                                key={index}
                                                className="text-[10px] font-[300] bg-[#1C4587] text-white px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <IoTimeOutline size={12} />
                                        <p className="text-[12px] text-gray-600">{item.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-b border-gray-500 mb-5"></div>
            <div className="xl:w-6/9 lg:w-5/6 mb-5 mx-auto w-full rounded-md">
                <AudioPlayer />
            </div>

        </div>
    );
};

export default FavoriteAudio;
