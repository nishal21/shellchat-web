export default function TerminalDemo() {
    return (
        <section className="px-6 py-16">
            <h2 className="text-center font-display font-bold text-xl mb-8 text-primary">[ LIVE_DEMO ]</h2>
            <div className="terminal-shadow rounded-lg overflow-hidden border border-primary/30 bg-terminal-bg max-w-4xl mx-auto">
                {/* Terminal Header */}
                <div className="bg-primary/10 px-4 py-2 border-b border-primary/20 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="size-2.5 rounded-full bg-red-500/50"></div>
                        <div className="size-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="size-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-[10px] text-primary/50 flex-1 text-center font-mono">bash — shellchat@node_7f2a</span>
                </div>

                {/* Terminal Body */}
                <div className="relative bg-black w-full border-t border-primary/20">
                    <img
                        src="/demo.png"
                        alt="ShellChat Terminal Demo"
                        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Scanline overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
