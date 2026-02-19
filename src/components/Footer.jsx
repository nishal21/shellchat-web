import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-8 border-t border-primary/20 px-6 py-12 flex flex-col items-center gap-8 bg-background-dark">
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-primary/60 tracking-wider">
                <Link to="/docs" className="hover:text-primary transition-colors">DOCUMENTATION</Link>
                <span>|</span>
                <Link to="/readme" className="hover:text-primary transition-colors">README</Link>
                <span>|</span>
                <Link to="/license" className="hover:text-primary transition-colors">LICENSE</Link>
                <span>|</span>
                <Link to="/code-of-conduct" className="hover:text-primary transition-colors">CODE OF CONDUCT</Link>
                <span>|</span>
                <Link to="/contributing" className="hover:text-primary transition-colors">CONTRIBUTING</Link>
                <span>|</span>
                <Link to="/security" className="hover:text-primary transition-colors">SECURITY</Link>
                <span>|</span>
                <a href="https://github.com/nishal21/shellchat" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
            </div>

            <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary/40">public</span>
                    <span className="text-[10px] text-primary/40">NETWORK STATUS: ONLINE</span>
                </div>
                <p className="text-[10px] text-primary/30 uppercase tracking-[0.2em]">
                    © 2026 SHELLCHAT DECENTRALIZED PROTOCOL
                </p>
                <p className="text-[9px] text-primary/20 italic">
                    Built with love for the terminal. No trackers. No cookies.
                </p>
            </div>

            <div className="relative w-full h-48 mt-4 overflow-hidden rounded border border-primary/10 grayscale opacity-20">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10"></div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558494949-efc5e60c94ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
            </div>
        </footer>
    );
}
