import { useRef, useState } from 'react';
import rainAudio from '../audio/rain.mp3';

const Rain = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(rainAudio);
            audioRef.current.loop = true;
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <button
                onClick={togglePlay}
                className={
                    "cursor-pointer bg-gradient-to-r from-[#1F7D53] to-[#2BAE66] " +
                    "py-3 px-8 text-white font-medium rounded-[2rem] " +
                    "border-2 border-[#18230F] shadow-lg " +
                    "hover:from-[#2BAE66] hover:to-[#3AC977] " +
                    "hover:shadow-xl hover:scale-105 " +
                    "active:scale-95 transition-all duration-200 " +
                    "focus:outline-none focus:ring-2 focus:ring-[#1F7D53] focus:ring-opacity-70"
                }
            >
                {isPlaying ? 'Parar ⏹️' : 'Aperte ⛈️'}
            </button>
        </div>
    );
};

export default Rain;