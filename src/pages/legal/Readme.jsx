import { Link } from 'react-router-dom';

export default function Readme() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 font-mono text-primary animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-8 text-primary/60 hover:text-primary transition-colors">
                <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back to Home
                </Link>
            </div>

            <article className="prose prose-invert prose-green max-w-none">
                <div className="flex flex-col items-center mb-12 border-b border-primary/20 pb-12">
                    <div className="w-24 h-24 mb-6 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500"></div>
                        <img src="/icon.ico" alt="ShellChat Logo" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,255,0,0.5)]" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center glitch-text text-white">
                        ShellChat <span className="text-primary">v1.0.0</span>
                    </h1>
                    <p className="text-xl text-primary/80 text-center max-w-2xl leading-relaxed">
                        The Retro-Futuristic, Serverless P2P Chat Application. <br />
                        <span className="italic text-primary/60 text-base mt-2 block">Encryption. Anonymity. Aesthetics.</span>
                    </p>

                    <div className="flex gap-4 mt-8">
                        <a href="https://github.com/nishal21/shellchat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded bg-primary/5 hover:bg-primary/10 transition-colors text-xs font-bold uppercase tracking-widest">
                            <span className="material-symbols-outlined text-sm">code</span>
                            Source Code
                        </a>
                        <Link to="/downloads" className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded hover:bg-primary/90 transition-colors text-xs font-bold uppercase tracking-widest">
                            <span className="material-symbols-outlined text-sm">download</span>
                            Download
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-primary/20 pb-2">
                            <span className="material-symbols-outlined text-primary">security</span>
                            Unbreakable Security
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-primary/80">
                                <span className="material-symbols-outlined text-primary shrink-0 text-lg">lock</span>
                                <span>
                                    <strong className="text-white block mb-1">End-to-End Encryption</strong>
                                    All traffic is encrypted using TLS 1.3 / Noise protocol.
                                </span>
                            </li>
                            <li className="flex gap-3 text-sm text-primary/80">
                                <span className="material-symbols-outlined text-primary shrink-0 text-lg">database</span>
                                <span>
                                    <strong className="text-white block mb-1">At-Rest Encryption</strong>
                                    Your local database is secured with Application-Level Encryption using XChaCha20-Poly1305.
                                </span>
                            </li>
                            <li className="flex gap-3 text-sm text-primary/80">
                                <span className="material-symbols-outlined text-primary shrink-0 text-lg">key</span>
                                <span>
                                    <strong className="text-white block mb-1">Key Derivation</strong>
                                    Argon2id hashes your password into a cryptographic key.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-white border-b border-primary/20 pb-2">
                            <span className="material-symbols-outlined text-primary">public</span>
                            True Serverless P2P
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-primary/80">
                                <span className="material-symbols-outlined text-primary shrink-0 text-lg">travel_explore</span>
                                <span>
                                    <strong className="text-white block mb-1">Global DHT</strong>
                                    Uses IPFS public DHT infrastructure to find peers worldwide without central servers.
                                </span>
                            </li>
                            <li className="flex gap-3 text-sm text-primary/80">
                                <span className="material-symbols-outlined text-primary shrink-0 text-lg">router</span>
                                <span>
                                    <strong className="text-white block mb-1">NAT Traversal</strong>
                                    Built-in AutoNAT and UPnP to punch through home routers and firewalls.
                                </span>
                            </li>
                            <li className="flex gap-3 text-sm text-primary/80">
                                <span className="material-symbols-outlined text-primary shrink-0 text-lg">devices</span>
                                <span>
                                    <strong className="text-white block mb-1">Multi-Platform</strong>
                                    Runs natively on Windows, Linux, macOS, Android, and iOS.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-6 border-b border-primary/20 pb-2">
                        <span className="material-symbols-outlined text-primary">architecture</span>
                        Architecture
                    </h2>
                    <div className="bg-black/50 border border-primary/20 p-6 rounded font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed">
                        {`graph TD
    A["User A (You)"] <-->|"Encrypted Stream (Noise)"| B["User B (Peer)"]
    A -.->|"DHT Lookup"| D(("Global DHT"))
    B -.->|"DHT Announce"| D
    
    subgraph "Your Device"
        UI[Retro UI]
        DB[("Encrypted DB (SQLCipher)")]
        Keys[Argon2 Keys]
    end`}
                    </div>
                    <ol className="list-decimal list-inside mt-6 space-y-2 text-sm text-primary/80 marker:text-primary">
                        <li><strong className="text-white">Bootstrap</strong>: Your node connects to the global P2P network.</li>
                        <li><strong className="text-white">Announce</strong>: You cryptographically sign your presence and announce it to the DHT.</li>
                        <li><strong className="text-white">Discover</strong>: You search for a peer's ID (e.g., QmHash...).</li>
                        <li><strong className="text-white">Connect</strong>: ShellChat establishes a direct TCP/QUIC connection.</li>
                        <li><strong className="text-white">Chat</strong>: Messages flow directly between devices. No middleman.</li>
                    </ol>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold flex items-center gap-2 text-white mb-6 border-b border-primary/20 pb-2">
                        <span className="material-symbols-outlined text-primary">terminal</span>
                        Usage
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-primary/5 border border-primary/10 p-6 rounded">
                            <h3 className="text-white font-bold mb-4">Quick Start</h3>
                            <ol className="list-decimal list-inside space-y-3 text-sm text-primary/80 marker:text-primary">
                                <li>Launch: Run <code className="bg-black/30 px-1 py-0.5 rounded text-white">./shellchat chat</code></li>
                                <li>Login: Set a master password (don't lose this!)</li>
                                <li>Connect:
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-primary/60 marker:text-primary/50">
                                        <li>Wait ~30s for Global DHT bootstrap.</li>
                                        <li>Type <code className="text-primary">/myid</code> to see your address.</li>
                                        <li>Type <code className="text-primary">/connect &lt;peer-multiaddr&gt;</code> to connect.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-primary/5 border border-primary/10 p-6 rounded">
                            <h3 className="text-white font-bold mb-4">Key Commands</h3>
                            <ul className="space-y-3 text-sm text-primary/80">
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <code className="text-primary font-bold">/help</code>
                                    <span>Show all commands</span>
                                </li>
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <code className="text-primary font-bold">/myid</code>
                                    <span>Display your P2P Address</span>
                                </li>
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <code className="text-primary font-bold">/copyid</code>
                                    <span>Copy address to clipboard</span>
                                </li>
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <code className="text-primary font-bold">/connect</code>
                                    <span>Connect to a remote peer</span>
                                </li>
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <code className="text-primary font-bold">/clear</code>
                                    <span>Clear screen buffer</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center border-t border-primary/20 pt-12 pb-8">
                    <p className="text-primary/60 text-sm mb-4">
                        Built with ❤️ by <a href="https://github.com/nishal21" className="text-primary hover:text-white underline decoration-dotted underline-offset-4">Nishal</a>.
                    </p>
                    <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/40">
                        <Link to="/license" className="hover:text-primary transition-colors">License</Link>
                        <span>•</span>
                        <Link to="/code-of-conduct" className="hover:text-primary transition-colors">Code of Conduct</Link>
                        <span>•</span>
                        <Link to="/contributing" className="hover:text-primary transition-colors">Contributing</Link>
                        <span>•</span>
                        <Link to="/security" className="hover:text-primary transition-colors">Security</Link>
                    </div>
                </div>

            </article>
        </div>
    );
}
