import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Docs() {
    const [activeTab, setActiveTab] = useState('usage');

    return (
        <div className="flex flex-col h-full font-mono text-primary">
            <header className="flex items-center p-4 border-b border-primary/20 justify-between shrink-0 bg-background-dark z-10 relative">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
                    <div className="flex flex-col">
                        <h2 className="text-primary text-sm font-bold leading-tight tracking-widest uppercase">SHELLCHAT_OS</h2>
                        <span className="text-[10px] text-primary/60 tracking-tighter">STATUS: ENCRYPTED // NODE: ACTIVE</span>
                    </div>
                </div>
                <Link to="/" className="text-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">logout</span>
                </Link>
            </header>

            <nav className="shrink-0 border-b border-primary/10 px-4 overflow-x-auto no-scrollbar bg-background-dark/50 backdrop-blur-sm sticky top-0 z-20">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab('usage')}
                        className={`flex flex-col items-center justify-center border-b-2 px-6 py-4 whitespace-nowrap transition-colors ${activeTab === 'usage' ? 'border-primary text-primary' : 'border-transparent text-primary/40 hover:text-primary'}`}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest">Usage Guide</p>
                    </button>
                    <button
                        onClick={() => setActiveTab('commands')}
                        className={`flex flex-col items-center justify-center border-b-2 px-6 py-4 whitespace-nowrap transition-colors ${activeTab === 'commands' ? 'border-primary text-primary' : 'border-transparent text-primary/40 hover:text-primary'}`}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest">Commands</p>
                    </button>
                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`flex flex-col items-center justify-center border-b-2 px-6 py-4 whitespace-nowrap transition-colors ${activeTab === 'faq' ? 'border-primary text-primary' : 'border-transparent text-primary/40 hover:text-primary'}`}
                    >
                        <p className="text-xs font-bold uppercase tracking-widest">FAQ</p>
                    </button>
                </div>
            </nav>

            <main className="flex-1 overflow-y-auto px-4 py-8 pb-24 max-w-4xl mx-auto w-full">

                {/* Usage Tab */}
                {activeTab === 'usage' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Introduction */}
                        <section>
                            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white glitch-text">
                                ShellChat Usage Manual
                            </h1>
                            <p className="text-primary/80 text-lg leading-relaxed border-l-2 border-primary/30 pl-4 py-2 bg-primary/5">
                                Master the decentralized web. <br />
                                The following guide covers initialization, connection, and security protocols.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-primary text-xl font-bold mb-6 flex items-center gap-2 border-b border-primary/20 pb-2">
                                <span className="bg-primary text-black px-1 text-sm font-bold">01</span>
                                INITIALIZATION
                            </h3>
                            <p className="text-primary/80 text-sm mb-4 leading-relaxed">
                                Before connecting to the network, generate your unique cryptographic identity. This happens locally on your device.
                            </p>
                            <div className="bg-primary/5 border border-primary/20 rounded p-4 font-mono text-sm">
                                <span className="text-primary mr-2">&gt;</span>
                                <code className="text-white">shellchat init</code>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-primary text-xl font-bold mb-6 flex items-center gap-2 border-b border-primary/20 pb-2">
                                <span className="bg-primary text-black px-1 text-sm font-bold">02</span>
                                CONNECTING_PEERS
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-white mb-2">My Identity</h4>
                                    <p className="text-primary/70 text-sm mb-2">Retrieve your full MultiAddress to share with others.</p>
                                    <div className="bg-primary/5 border border-primary/20 rounded p-3 font-mono text-sm">
                                        <span className="text-primary mr-2">&gt;</span>
                                        <code className="text-white">/myid</code>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">Connect to Remote</h4>
                                    <p className="text-primary/70 text-sm mb-2">Establish a direct, encrypted tunnel to another peer.</p>
                                    <div className="bg-primary/5 border border-primary/20 rounded p-3 font-mono text-sm">
                                        <span className="text-primary mr-2">&gt;</span>
                                        <code className="text-white">/connect &lt;peer_multiaddr&gt;</code>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="border-2 border-red-600/50 bg-red-900/5 rounded-xl p-6 relative overflow-hidden group hover:border-red-500 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <span className="material-symbols-outlined text-6xl text-red-500">warning</span>
                                </div>
                                <h4 className="text-red-500 font-bold text-xl mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined">report</span>
                                    DANGER ZONE
                                </h4>
                                <p className="text-red-400/80 text-sm leading-relaxed mb-4 max-w-lg">
                                    The <span className="font-bold text-red-400">/obliterate</span> command is irreversible. It performs a cryptographic shred of all local data, keys, and history.
                                </p>
                                <div className="bg-black border border-red-500/30 p-4 rounded inline-block">
                                    <div className="flex gap-2 text-sm font-mono">
                                        <span className="text-red-500 shrink-0">&gt;</span>
                                        <code className="text-red-400">/obliterate --confirm-now</code>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* Commands Tab */}
                {activeTab === 'commands' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <section>
                            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white glitch-text">
                                Command Reference
                            </h1>
                            <p className="text-primary/80 mb-6">
                                Full list of available CLI commands in ShellChat v1.0.0.
                            </p>
                        </section>

                        <div className="overflow-x-auto border border-primary/20 rounded shadow-[0_0_15px_rgba(0,255,0,0.1)]">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-primary/10 text-primary uppercase font-bold text-xs">
                                    <tr>
                                        <th className="p-4 border-b border-primary/20">Command</th>
                                        <th className="p-4 border-b border-primary/20">Description</th>
                                        <th className="p-4 border-b border-primary/20 hidden md:table-cell">Usage Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary/10 font-mono">
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/help</td>
                                        <td className="p-4 text-primary/70">Show available commands list</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/help</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/myid</td>
                                        <td className="p-4 text-primary/70">Display full P2P MultiAddress</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/myid</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/copyid</td>
                                        <td className="p-4 text-primary/70">Copy address to clipboard</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/copyid</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/connect</td>
                                        <td className="p-4 text-primary/70">Connect to remote peer</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/connect /ip4/1.2.3.4/...</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/clear</td>
                                        <td className="p-4 text-primary/70">Clear chat screen buffer</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/clear</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/clearhistory</td>
                                        <td className="p-4 text-primary/70">Wipe message database</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/clearhistory</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5 transition-colors">
                                        <td className="p-4 text-white font-bold">/quit</td>
                                        <td className="p-4 text-primary/70">Exit application securely</td>
                                        <td className="p-4 text-primary/50 hidden md:table-cell">/quit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <section>
                            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white glitch-text">
                                Frequent Questions
                            </h1>
                            <p className="text-primary/80 mb-6">
                                Everything you need to know about functionality and security.
                            </p>
                        </section>

                        <div className="grid gap-6">
                            <div className="bg-primary/5 border border-primary/20 p-6 rounded hover:border-primary/40 transition-colors">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-primary">Q:</span> Where are my messages stored?
                                </h3>
                                <p className="text-primary/70 text-sm leading-relaxed pl-6 border-l border-primary/10">
                                    <span className="text-primary font-bold">Locally using SQLite.</span> ShellChat is serverless.
                                    Messages never touch a cloud database. They reside only on your device, encrypted with XChaCha20-Poly1305.
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 p-6 rounded hover:border-primary/40 transition-colors">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-primary">Q:</span> How do I find people?
                                </h3>
                                <p className="text-primary/70 text-sm leading-relaxed pl-6 border-l border-primary/10">
                                    We use the <span className="text-white">Global DHT (Distributed Hash Table)</span>.
                                    When you share your Peer ID, your node announces its presence to the network, allowing others to find your IP address securely.
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 p-6 rounded hover:border-primary/40 transition-colors">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-primary">Q:</span> Does it work on Mobile?
                                </h3>
                                <p className="text-primary/70 text-sm leading-relaxed pl-6 border-l border-primary/10">
                                    <span className="text-primary font-bold">Yes!</span> Android APKs are available.
                                    The mobile app shares the same core Go code as the desktop version for full compatibility. iOS support is coming soon.
                                </p>
                            </div>

                            <div className="bg-primary/5 border border-primary/20 p-6 rounded hover:border-primary/40 transition-colors">
                                <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="text-primary">Q:</span> Is it open source?
                                </h3>
                                <p className="text-primary/70 text-sm leading-relaxed pl-6 border-l border-primary/10">
                                    100%. You can audit the code, build it yourself, or fork it on GitHub. We believe in transparency for security tools.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
