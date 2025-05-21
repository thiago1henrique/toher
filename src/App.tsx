import './App.css'
import Rain from "./components/Rain.tsx";
import YouTube from 'react-youtube';
import {useState} from "react";

function App() {

    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
    }

    const videoOptions = {
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            playlist: 'bpOSxM0rNPM' // Para loop contínuo
        }
    };

    return (
        <div className="relative h-dvh overflow-x-hidden"> {/* Keep h-dvh and overflow-x-hidden for width */}
            {/* Vídeo de fundo do YouTube */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <YouTube
                    videoId="bpOSxM0rNPM"
                    opts={videoOptions}
                    className="w-full h-full"
                    iframeClassName="w-full h-full scale-125 object-cover"
                />
            </div>

            {/* Section 1: This will take full viewport height */}
            <div className="relative z-10 px-4 h-dvh flex flex-col justify-center bg-black/60"> {/* Changed h-full to h-dvh */}
                <div className={"flex items-center gap-1"}>
                    <p className="text-white">Do you wanna know?</p>
                    <div className={"h-4 w-4 bg-[#16161d]"}></div>
                    <div className={"h-4 w-4 bg-[#1F7D53]"}></div>
                    <div className={"h-4 w-4 bg-blue-800"}></div>
                    <img
                        src="https://www.icegif.com/wp-content/uploads/2024/08/cinnamoroll-icegif-2.gif"
                        alt="cinnamoroll "
                        className="w-16 h-16"
                    />
                </div>
                <h1 className={"text-6xl font-bold pb-4 text-white"}>Quero ser mais do que seu.</h1>
                <Rain/>
            </div>

            {/* Section 2: This will appear below the first section, and you can scroll to it */}
            <div className={"flex justify-center items-center h-[20rem] w-full z-10"}> {/* Added relative z-10 to ensure it's above the video */}
                <div className="flex flex-col gap-4 items-center">
                    <img
                        src="https://i.pinimg.com/originals/58/6b/50/586b501cd05d9ab77fa1beb6b3045a82.gif"
                        alt="cinamoroll"
                        width={"120"}
                    />
                    <button
                        onClick={increment}
                        className="
                        bg-gradient-to-r from-[#FFB6C1] to-[#FF69B4]
                        text-white font-semibold
                        py-3 px-8 rounded-full
                        border-2 border-pink-200
                        shadow-md hover:shadow-lg
                        transform transition-all duration-300
                        hover:scale-105 hover:from-[#FF69B4] hover:to-[#FF85C1]
                        active:scale-95
                        relative overflow-hidden
                        group
                      "
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="text-lg font-cursive">Sinto sua falta</span>
                        <span className="
                          w-8 h-8 flex items-center justify-center
                          bg-pink-200/30 rounded-full
                          group-hover:bg-pink-200/40
                          transition-colors
                        ">
                          {number}
                        </span>
                        💖
                      </span>
                        {/* Efeito de brilho */}
                        <div className="
                        absolute inset-0 bg-gradient-to-r from-white/30 to-transparent
                        opacity-0 group-hover:opacity-30
                        transition-opacity duration-300
                      "></div>
                    </button>
                </div>
            </div>

            {number >= 1 && (
                <div className="px-4 py-16 bg-gradient-to-br from-[#DA6C6C] to-[#C24545] relative overflow-hidden">
                    {/* Decoração de fundo */}
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-rose-300 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            <span className="block mb-4">Você não faz ideia</span>
                            <span className="text-5xl md:text-6xl font-normal">de quanto eu gosto de ti</span>
                            <div className="mt-4 flex items-center gap-4">
                                <s className="text-3xl opacity-70">Kethlen</s>
                                <span className="text-8xl md:text-9xl font-cursive leading-none text-rose-100 drop-shadow-lg">
          amor
        </span>
                            </div>
                        </h2>

                        <div className="my-12 w-24 h-1 bg-white/30 rounded-full"></div>

                        <p className="text-xl md:text-2xl leading-relaxed text-rose-100 max-w-3xl space-y-6">
                            <span className="block mb-6">✨ Talvez você me ache louco, e sou mesmo... louco por você!</span>

                            <span className="block pl-6 border-l-4 border-white/20">
        Gosto de ver você toda animada com algum livro ou manhwa,<br/>
        sua risada doce, seus cabelos, seu sorriso...<br/>
        <span className="text-3xl">💖</span> enchem meu coração de felicidade!
      </span>

                            <span className="block bg-white/10 p-6 rounded-2xl backdrop-blur-sm mt-8">
        Te abraçar é como encontrar a paz em meio da tempestade.<br/>
        Você me faz sentir um calor especial no peito...<br/>
        <span className="text-lg font-semibold mt-2 block">Quero ser mais que:</span>
        <div className="flex flex-wrap gap-3 mt-2">
          {['amigo', 'ficante', 'namorado', 'noivo', 'marido'].map((item) => (
              <span key={item} className="px-4 py-2 bg-white/10 rounded-full">{item}</span>
          ))}
        </div>
      </span>

                            <span className="block mt-8 text-2xl font-semibold">
        Quero construir um futuro onde estejamos juntos em todas as conquistas:
      </span>

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                {[
                                    '📚 Nossas formaturas lado a lado',
                                    '🏡 Fazendo compras para nosso lar',
                                    '🤒 Cuidando de você quando precisar',
                                    '🌅 Apoiando cada sonho seu',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">✦</div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </p>

                        {/* Decoração final */}
                        <div className="mt-12 flex justify-center space-x-4">
                            {['❤️', '🌸', '💖', '🌺'].map((emoji) => (
                                <span key={emoji} className="text-3xl animate-float">{emoji}</span>
                            ))}
                        </div>

                        <img src="https://i.pinimg.com/originals/2f/1a/b4/2f1ab4adffb51d6f565a2eeaea71cfa9.gif" alt="cinnamoroll"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App