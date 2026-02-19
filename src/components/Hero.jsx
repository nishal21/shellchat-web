import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="px-6 py-16 flex flex-col items-center text-center gap-10 min-h-[80vh] justify-center">
            {/* ASCII Art Logo */}
            <div className="w-full py-2 overflow-x-auto text-[0.45rem] leading-[0.5rem] md:text-xs md:leading-4 text-primary/40 select-none font-mono opacity-80 hover:opacity-100 transition-opacity whitespace-pre text-center scrollbar-hide">
                <pre className="inline-block text-left terminal-shadow p-4 rounded bg-black/20 backdrop-blur-sm border border-primary/10">
                    {`   _____ __         ____  ________          __ 
  / ___// /_  ___  / / / / ____/ /_  ____ _/ /_
  \\__ \\/ __ \\/ _ \\/ / / / /   / __ \\/ __ \`/ __/
 ___/ / / / /  __/ / / / /___/ / / / /_/ / /_  
/____/_/ /_/\\___/_/_/  \\____/_/ /_/\\__,_/\\__/  `}
                </pre>
            </div>

            <div className="space-y-6 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none glitch-text crt-glow text-white mix-blend-screen">
                    ShellChat<span className="text-primary">.</span>
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide text-primary/80">
                    Secure. Decentralized. <span className="font-bold text-white">Retro.</span>
                </p>
                <p className="text-primary/60 text-sm md:text-base max-w-md mx-auto leading-relaxed font-mono pt-4">
                    // True E2E encryption and P2P networking in a high-tech terminal interface. <br className="hidden md:block" />
                    No servers. No middlemen. Just code.
                </p>
            </div>

            <div className="flex flex-col w-full gap-4 pt-8 md:flex-row md:justify-center md:items-center">
                <Link to="/downloads" className="group relative w-full md:w-auto overflow-hidden bg-primary text-black font-bold py-4 px-8 rounded shadow-[0_0_20px_rgba(0,255,0,0.4)] active:scale-[0.98] transition-all hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-lg">download</span>
                        DOWNLOAD v1.0.0
                    </span>
                </Link>
                <a
                    href="https://github.com/nishal21/shellchat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full md:w-auto px-8 py-4 border border-primary/30 rounded text-primary/80 hover:text-white hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 font-mono text-sm"
                >
                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">code</span>
                    View Source
                </a>
            </div>
        </section>
    );
}
