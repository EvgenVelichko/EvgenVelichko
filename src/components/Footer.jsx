/** @format */

import React from 'react';
import { ChevronUp, Linkedin, Github, Twitter, Code } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <a
                        href="#hero"
                        className="bg-amber-500 text-gray-900 p-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
                        <ChevronUp size={24} />
                    </a>
                </div>

                <div className="flex flex-col items-center">
                    <a
                        href="#hero"
                        className="flex items-center text-amber-500 font-bold text-2xl mb-6">
                        <Code className="mr-2" /> DEV
                        <span className="text-white">PORTFOLIO</span>
                    </a>

                    <div className="flex space-x-4 mb-8">
                        <a
                            href="https://www.linkedin.com/in/evgen-velichko-755527338/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/EvgenVelichko"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300">
                            <Github size={20} />
                        </a>
                    </div>

                    <div className="text-center text-gray-500 text-sm">
                        <p>
                            © {new Date().getFullYear()} EvgenVelichko. All rights
                            reserved.
                        </p>
                        <p className="mt-2">Front-end Developer</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
