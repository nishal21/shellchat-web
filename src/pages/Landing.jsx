import Hero from '../components/Hero';
import Features from '../components/Features';
import TerminalDemo from '../components/TerminalDemo';

export default function Landing() {
    return (
        <div className="animate-fade-in">
            <Hero />
            <Features />
            <TerminalDemo />
        </div>
    );
}
