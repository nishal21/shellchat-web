export default function Features() {
    const features = [
        {
            icon: "shield_lock",
            title: "End-to-End Encryption",
            desc: "AES-256-GCM hardware-accelerated encryption. Your private keys never leave your local device storage."
        },
        {
            icon: "hub",
            title: "P2P Networking",
            desc: "Distributed DHT architecture. Connect directly to peers using onion routing and hole punching techniques."
        },
        {
            icon: "terminal",
            title: "Universally Retro",
            desc: "A classic command-line aesthetic optimized for modern high-refresh rate displays and mobile gestures."
        }
    ];

    return (
        <section className="px-6 py-12 bg-primary/5 border-y border-primary/10">
            <div className="mb-8">
                <h2 className="text-xs font-bold tracking-widest text-primary/40 uppercase mb-2">&gt; SYSTEM_FEATURES</h2>
                <h3 className="text-2xl font-display font-bold text-white">Technical Specifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <div key={index} className="p-5 border border-primary/20 rounded bg-black/40 backdrop-blur-sm group hover:border-primary/60 transition-colors">
                        <span className="material-symbols-outlined text-primary mb-3 text-3xl">{feature.icon}</span>
                        <h4 className="text-lg font-bold mb-2 text-primary">{feature.title}</h4>
                        <p className="text-primary/60 text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
