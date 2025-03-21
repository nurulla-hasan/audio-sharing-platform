"use client"
import FavoriteAudio from "@/components/body/favorite/audio/FavoriteAudio";
import FavoritePlaylist from "@/components/body/favorite/playlist/FavoritePlaylist";
import { useState } from "react";

const Favorite = () => {
    const [selectedOption, setSelectedOption] = useState("Audio");

    return (
        <>
            <div className="xl:w-6/9 lg:w-5/6 mx-auto px-5 lg:px-0 md:p-10 py-5">
                <div className="flex justify-between items-center gap-4">
                    <h2 className="xl:text-2xl text-xl font-semibold text-[#1C4587]">My Favorite</h2>

                    {/* Dropdown */}
                    <select
                        className="border text-[#595D62] outline-none border-[#1C4587] px-4 py-1 rounded-md"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="Audio">Audio</option>
                        <option value="Playlist">Playlist</option>
                    </select>
                </div>

            </div>

            {/* Dynamic Component Rendering */}
            <div className="mt-4">
                {selectedOption === "Audio" ? <AudioComponent /> : <PlaylistComponent />}
            </div>
        </>
    );
};

// Audio Component
const AudioComponent = () => (
    <FavoriteAudio />
);

// Playlist Component
const PlaylistComponent = () => (
    <FavoritePlaylist />
);

export default Favorite;
