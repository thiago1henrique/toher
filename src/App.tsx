import './App.css'
import Rain from "./components/Rain.tsx";
import YouTube from 'react-youtube';

function App() {
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
        <div className="relative h-dvh overflow-hidden">
            {/* Vídeo de fundo do YouTube */}
            <div className="absolute inset-0 z-0">
                <YouTube
                    videoId="bpOSxM0rNPM"
                    opts={videoOptions}
                    className="w-full h-full"
                    iframeClassName="w-full h-full scale-125 object-cover"
                />
            </div>

            {/* Conteúdo principal */}
            <div className="relative z-10 px-4 h-full flex flex-col justify-center bg-black/60">
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
                <h1 className={"text-6xl font-bold pb-4 text-white"}>Quero ser mais do que seu</h1>
                <Rain/>
            </div>
        </div>
    )
}

export default App