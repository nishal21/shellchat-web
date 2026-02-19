import { Link } from 'react-router-dom';

export default function Security() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 font-mono text-primary animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-8 text-primary/60 hover:text-primary transition-colors">
                <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back to Home
                </Link>
            </div>

            <article className="prose prose-invert prose-green max-w-none">
                <h1 className="text-3xl font-display font-bold mb-8 text-white border-b border-primary/20 pb-4">
                    Security Policy
                </h1>

                <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-lg mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-red-500 text-3xl">notifications_active</span>
                        <h2 className="text-xl font-bold text-white m-0">Reporting a Vulnerability</h2>
                    </div>
                    <p className="text-primary/80 mb-4 text-sm leading-relaxed">
                        We take security seriously. If you discover a vulnerability, please report it responsibly.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-primary/70 marker:text-red-500">
                        <li><strong>You can open a public issue or Send Mail.</strong></li>
                        <li>Email us directly at <a href="mailto:nishalamv@gmail.com" className="text-white underline decoration-dotted">nishalamv@gmail.com</a> (or open a Draft Security Advisory on GitHub).</li>
                        <li>Include a detailed description, affected versions, and steps to reproduce.</li>
                    </ol>
                    <p className="text-primary/60 text-xs mt-4">
                        We aim to acknowledge reports within 48 hours and will provide a timeline for a fix.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">lock</span>
                        Encryption Standards
                    </h2>
                    <p className="text-primary/80 mb-4 text-sm leading-relaxed">
                        ShellChat's goals are confidentiality and minimal metadata. The high-level stack is:
                    </p>
                    <div className="space-y-4">
                        <div className="bg-primary/5 border border-primary/10 p-4 rounded">
                            <h3 className="text-white font-bold text-sm mb-1">Transport</h3>
                            <p className="text-primary/70 text-xs leading-relaxed">
                                <strong className="text-primary">libp2p (Noise):</strong> Primary end-to-end stream encryption for P2P connections. TLS 1.3 is used where endpoints/bridges employ it.
                            </p>
                        </div>
                        <div className="bg-primary/5 border border-primary/10 p-4 rounded">
                            <h3 className="text-white font-bold text-sm mb-1">At-Rest (Database & Storage)</h3>
                            <p className="text-primary/70 text-xs leading-relaxed">
                                <strong className="text-primary">XChaCha20-Poly1305 (AEAD):</strong> Application-level encryption for message payloads and sensitive blobs before writing to disk. Ensures authenticated encryption with a large nonce to prevent reuse.
                            </p>
                        </div>
                        <div className="bg-primary/5 border border-primary/10 p-4 rounded">
                            <h3 className="text-white font-bold text-sm mb-1">Storage Engine</h3>
                            <p className="text-primary/70 text-xs leading-relaxed">
                                <strong className="text-primary">Pure-Go SQLite:</strong> (modernc.org/sqlite) used for cross-platform compatibility. Encryption is performed at the application layer.
                            </p>
                        </div>
                        <div className="bg-primary/5 border border-primary/10 p-4 rounded">
                            <h3 className="text-white font-bold text-sm mb-1">Key Derivation</h3>
                            <p className="text-primary/70 text-xs leading-relaxed mb-2">
                                <strong className="text-primary">Argon2id:</strong> Derives encryption keys from user passphrases.
                            </p>
                            <ul className="list-disc list-inside text-[10px] text-primary/50 ml-2 font-mono">
                                <li>Iterations: 3</li>
                                <li>Memory: 64 MB</li>
                                <li>Parallelism: 4</li>
                            </ul>
                        </div>
                        <div className="bg-primary/5 border border-primary/10 p-4 rounded">
                            <h3 className="text-white font-bold text-sm mb-1">Secrets Handling</h3>
                            <p className="text-primary/70 text-xs leading-relaxed">
                                Keys are held in-process and never written to disk unencrypted. OS-provided secure keystores (Keychain, Keystore, DPAPI) are used when available.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Threat Model & Limitations</h2>
                        <ul className="space-y-3 text-sm text-primary/80 list-disc list-inside marker:text-primary">
                            <li>Does NOT prevent endpoint compromise or malware.</li>
                            <li>Metadata (connection timing, IP) may be visible to network intermediaries.</li>
                            <li>Users seeking high anonymity should use VPNs/Tor.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Supported Versions</h2>
                        <div className="border border-primary/20 rounded overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-primary/10 text-primary uppercase font-bold text-xs">
                                    <tr>
                                        <th className="p-3 border-b border-primary/20">Version</th>
                                        <th className="p-3 border-b border-primary/20">Supported</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary/10">
                                    <tr>
                                        <td className="p-3 text-white font-mono">1.x.x</td>
                                        <td className="p-3"><span className="text-green-500 font-bold">✓ Yes</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 text-white font-mono">&lt; 1.0</td>
                                        <td className="p-3"><span className="text-red-500 font-bold">✗ No</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mb-12 border-t border-primary/20 pt-8">
                    <h2 className="text-xl font-bold text-white mb-4">Disclosure & Response</h2>
                    <ul className="space-y-2 text-sm text-primary/80 list-disc list-inside marker:text-primary">
                        <li>We will not publicly disclose a reported CVE until a fix is available.</li>
                        <li>Coordinated disclosure timelines will be agreed upon.</li>
                        <li>Secure means (PGP) will be provided for exchanging secrets if needed.</li>
                    </ul>
                </div>

            </article>
        </div>
    );
}
