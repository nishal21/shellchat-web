import { Link } from 'react-router-dom';

export default function Contributing() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 font-mono text-primary animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-8 text-primary/60 hover:text-primary transition-colors">
                <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Back to Home
                </Link>
            </div>

            <article className="prose prose-invert prose-green max-w-none">
                <h1 className="text-3xl font-display font-bold mb-2 text-white">
                    Contributing to ShellChat
                </h1>
                <p className="text-primary/60 mb-8 border-l-2 border-primary/30 pl-4 py-1 italic">
                    First off, thanks for taking the time to contribute! ❤️
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">bug_report</span>
                            Reporting Bugs
                        </h2>
                        <ul className="text-sm text-primary/80 space-y-2 list-disc list-inside marker:text-primary">
                            <li>Make sure that you are using the latest version.</li>
                            <li>Read the Documentation/FAQ to verify it's a bug.</li>
                            <li>Check if the issue has already been reported.</li>
                            <li>Open a new Issue with a clear, descriptive title.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">lightbulb</span>
                            Suggesting Enhancements
                        </h2>
                        <ul className="text-sm text-primary/80 space-y-2 list-disc list-inside marker:text-primary">
                            <li>Open a new Issue with a clear title.</li>
                            <li>Provide a step-by-step description.</li>
                            <li>Explain why this enhancement would be useful.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-primary/20 pb-2">
                        <span className="material-symbols-outlined text-primary">code</span>
                        Your First Code Contribution
                    </h2>
                    <ol className="relative border-l border-primary/20 ml-3 space-y-8 pb-4">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-background-dark rounded-full -left-3 ring-1 ring-primary/50 text-xs font-bold text-primary">1</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Fork & Clone</h3>
                            <p className="mb-4 text-sm font-normal text-primary/60">Fork the repo on GitHub and clone it to your machine.</p>
                            <code className="p-2 bg-black/50 border border-primary/10 rounded text-xs text-primary/80 block w-fit">git clone https://github.com/nishal21/shellchat.git</code>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-background-dark rounded-full -left-3 ring-1 ring-primary/50 text-xs font-bold text-primary">2</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Branch & Code</h3>
                            <p className="text-sm font-normal text-primary/60">Create a new branch for your feature. Follow Go style guides.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-background-dark rounded-full -left-3 ring-1 ring-primary/50 text-xs font-bold text-primary">3</span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Submit PR</h3>
                            <p className="text-sm font-normal text-primary/60">Push your branch and submit a Pull Request to the main repo.</p>
                        </li>
                    </ol>
                </div>
            </article>
        </div>
    );
}
