import { Link } from 'react-router-dom';

export default function License() {
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
                    MIT License
                </h1>

                <div className="bg-primary/5 p-8 rounded border border-primary/10 font-mono text-sm leading-relaxed whitespace-pre-wrap text-primary/80 selection:bg-primary selection:text-black">
                    {`Copyright (c) 2026 Nishal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                </div>
            </article>
        </div>
    );
}
