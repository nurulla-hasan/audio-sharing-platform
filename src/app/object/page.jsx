"use client"
import AllProject from '@/components/body/object/AllProject';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";




const ObjectPage = () => {

    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className='min-h-screen w-2/3 mx-auto mt-10 mb-20'>

            <div className="flex justify-between items-center">
                <h1 className="text-xl text-[#1C4587] font-bold">Exchange Services & Goods</h1>
                <div className='flex gap-5 items-center justify-center'>
                    <div className="relative border border-[#365173] rounded-lg flex items-center">
                        <CiSearch className='ml-2' color='#1C4587' size={15} />
                        <input
                            type="text"
                            placeholder="Search Project"
                            // onChange={(e) => onSearch(e.target.value)}
                            className="px-3 py-2 border-none outline-none text-[#1C4587]"
                        />

                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500 font-semibold cursor-pointer"
                    >
                        <button className="cursor-pointer bg-gradient-to-b from-[#193f7c] to-[#2965c4] text-white px-4 py-2 rounded-md font-medium">
                            +Create New Project
                        </button>
                    </motion.div>
                </div>
            </div>


            {/* Tabs------ */}
            <div className="flex border-[#1C4587] border w-80 justify-between rounded-sm mt-10">
                {[
                    { id: "all", label: "All Project" },
                    { id: "my", label: "My Project" },
                    { id: "joined", label: "Joined Project" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 text-xs font-medium transition-all border rounded-sm ${activeTab === tab.id
                            ? "bg-[#1C4587] border border-[#1C4587] text-white"
                            : "border-transparent text-[#1C4587]"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* tab content */}
            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "all" && <AllProjects />}
                {activeTab === "my" && <MyProjects />}
                {activeTab === "joined" && <JoinedProjects />}
            </div>



        </div>
    );
};

const AllProjects = () => (
    <div>
        <AllProject></AllProject>
    </div>
);

const MyProjects = () => (
    <div className='relative '>
        <div className='absolute -top-16 right-0 border border-[#1e4a9b] px-1 rounded-sm'>
            <select className='text-xs text outline-none py-1'>
                <option value="">Active</option>
                <option value="">Completed</option>
            </select>
        </div>
        <AllProject></AllProject>
    </div>
);

const JoinedProjects = () => (
    <div className='relative'>
        <div className='absolute -top-16 right-0 border border-[#1e4a9b] px-1 rounded-sm'>
            <select className='text-xs text outline-none py-1'>
                <option value="">Active</option>
                <option value="">Completed</option>
            </select>
        </div>
        <AllProject></AllProject>
    </div>
);

export default ObjectPage;