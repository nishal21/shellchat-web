import { Link } from 'react-router-dom';

export default function CodeOfConduct() {
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
                    Code of Conduct
                </h1>

                <section className="mb-12">
                    <h2 className="text-xl font-bold text-white mb-4">Our Pledge</h2>
                    <p className="text-primary/80 leading-relaxed mb-6">
                        In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold text-white mb-4">Our Standards</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-900/10 border border-green-500/20 p-6 rounded">
                            <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined">check_circle</span>
                                Positive Behavior
                            </h3>
                            <ul className="space-y-2 text-sm text-green-300/80 list-disc list-inside marker:text-green-500">
                                <li>Using welcoming and inclusive language</li>
                                <li>Being respectful of differing viewpoints and experiences</li>
                                <li>Gracefully accepting constructive criticism</li>
                                <li>Focusing on what is best for the community</li>
                                <li>Showing empathy towards other community members</li>
                            </ul>
                        </div>

                        <div className="bg-red-900/10 border border-red-500/20 p-6 rounded">
                            <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined">cancel</span>
                                Unacceptable Behavior
                            </h3>
                            <ul className="space-y-2 text-sm text-red-300/80 list-disc list-inside marker:text-red-500">
                                <li>The use of sexualized language or imagery</li>
                                <li>Trolling, insulting/derogatory comments, and attacks</li>
                                <li>Public or private harassment</li>
                                <li>Publishing others' private information (doxing)</li>
                                <li>Other conduct appropriate in a professional setting</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Enforcement</h2>
                    <p className="text-primary/80 leading-relaxed">
                        Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at <a href="mailto:nishalamv@gmail.com" className="text-white underline decoration-dotted underline-offset-4 hover:text-primary">nishalamv@gmail.com</a>. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.
                    </p>
                </section>
            </article>
        </div>
    );
}
