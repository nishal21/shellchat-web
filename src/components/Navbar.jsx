import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 bg-background-dark/80 backdrop-blur-md border-b border-primary/20 p-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
                <span className="material-symbols-outlined text-primary text-2xl crt-glow group-hover:animate-pulse">terminal</span>
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">ShellChat<span className="text-primary group-hover:text-white">.</span></span>
            </Link>

            <nav className="hidden md:flex gap-6">
                <Link to="/docs" className="text-primary/70 hover:text-primary font-mono text-sm uppercase tracking-widest transition-colors">Docs</Link>
                <Link to="/downloads" className="text-primary/70 hover:text-primary font-mono text-sm uppercase tracking-widest transition-colors">Download</Link>
                <a href="https://github.com/nishal21/shellchat" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary font-mono text-sm uppercase tracking-widest transition-colors">GitHub</a>
            </nav>

            <button className="md:hidden flex items-center justify-center p-2 rounded border border-primary/30 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">menu</span>
            </button>
        </header>
    );
}
