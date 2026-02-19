import { Link } from 'react-router-dom';

export default function Downloads() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-80px)] font-mono">
            {/* Header */}
            <div className="px-6 pt-12 pb-8 border-b border-primary/10">
                <Link to="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary mb-6 transition-colors group">
                    <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
                </Link>
                <h1 className="text-4xl md:text-5xl font-display font-bold leading-none mb-4 glitch-text text-white">
                    GET THE <br /><span className="text-primary">BINARY.</span>
                </h1>
                <p className="text-primary/70 text-sm md:text-base font-medium leading-relaxed max-w-md">
                    Choose your platform. No trackers. No BS. <br />
                    Decentralized by design.
                </p>
                <div className="mt-6 flex gap-4">
                    <a
                        href="https://github.com/nishal21/shellchat/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                    >
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                        View All Releases on GitHub
                    </a>
                </div>
            </div>

            {/* Downloads Grid */}
            <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">

                {/* Windows */}
                <a href="https://github.com/nishal21/shellchat/releases/download/v1.0.0/shellchat-windows.exe" className="group relative border border-primary/30 bg-primary/5 p-6 flex flex-col gap-4 rounded hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">window</span>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">v1.0.0</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">Windows</h3>
                        <p className="text-primary/60 text-xs font-mono mt-1">.exe Installer (x64)</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/80 group-hover:text-primary">
                        <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                    </div>
                </a>

                {/* macOS ARM */}
                <a href="https://github.com/nishal21/shellchat/releases/download/v1.0.0/shellchat-macos-arm64.tar.gz" className="group relative border border-primary/30 bg-primary/5 p-6 flex flex-col gap-4 rounded hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">laptop_mac</span>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">v1.0.0</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">macOS <span className="text-primary text-sm">(Apple Silicon)</span></h3>
                        <p className="text-primary/60 text-xs font-mono mt-1">.tar.gz (M1/M2/M3)</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/80 group-hover:text-primary">
                        <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                    </div>
                </a>

                {/* macOS Intel */}
                <a href="https://github.com/nishal21/shellchat/releases/download/v1.0.0/ShellChat-macOS-Intel.tar.gz" className="group relative border border-primary/30 bg-primary/5 p-6 flex flex-col gap-4 rounded hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all">laptop_mac</span>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">v1.0.0</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">macOS <span className="text-primary/70 text-sm">(Intel)</span></h3>
                        <p className="text-primary/60 text-xs font-mono mt-1">.tar.gz (x64 Legacy)</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/80 group-hover:text-primary">
                        <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                    </div>
                </a>

                {/* Linux */}
                <a href="https://github.com/nishal21/shellchat/releases/download/v1.0.0/shellchat-linux" className="group relative border border-primary/30 bg-primary/5 p-6 flex flex-col gap-4 rounded hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">terminal</span>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">v1.0.0</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">Linux</h3>
                        <p className="text-primary/60 text-xs font-mono mt-1">Binary (x64)</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/80 group-hover:text-primary">
                        <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                    </div>
                </a>

                {/* Linux (.tar.xz) */}
                <a href="https://github.com/nishal21/shellchat/releases/download/v1.0.0/shellchat-linux.tar.xz" className="group relative border border-primary/30 bg-primary/5 p-6 flex flex-col gap-4 rounded hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">folder_zip</span>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">v1.0.0</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">Linux <span className="text-primary/70 text-sm">(Tarball)</span></h3>
                        <p className="text-primary/60 text-xs font-mono mt-1">.tar.xz Package</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/80 group-hover:text-primary">
                        <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                    </div>
                </a>

                {/* Android */}
                <a href="https://github.com/nishal21/shellchat/releases/download/v1.0.0/shellchat-android.apk" className="group relative border border-primary/30 bg-primary/5 p-6 flex flex-col gap-4 rounded hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">android</span>
                        <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">v1.0.0</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg uppercase tracking-wide">Android</h3>
                        <p className="text-primary/60 text-xs font-mono mt-1">.apk Package</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/80 group-hover:text-primary">
                        <span className="text-xs font-bold uppercase tracking-widest">Download</span>
                        <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">download</span>
                    </div>
                </a>

                {/* iOS (Coming Soon) */}
                <div className="relative border border-primary/10 bg-primary/0 p-6 flex flex-col gap-4 rounded opacity-60 cursor-not-allowed">
                    <div className="flex items-start justify-between">
                        <span className="material-symbols-outlined text-4xl text-primary/50">phone_iphone</span>
                        <span className="bg-primary/10 text-primary/50 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">SOON</span>
                    </div>
                    <div>
                        <h3 className="text-primary/50 font-bold text-lg uppercase tracking-wide">iOS</h3>
                        <p className="text-primary/30 text-xs font-mono mt-1">App Store / TestFlight</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center justify-between text-primary/40">
                        <span className="text-xs font-bold uppercase tracking-widest">In Development</span>
                        <span className="material-symbols-outlined text-sm">lock_clock</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
