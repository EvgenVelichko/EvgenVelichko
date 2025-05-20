/** @format */

import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-16 relative bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="h-2/3 w-1/2 bg-amber-500/20 absolute -top-20 -left-20 rounded-full blur-3xl"></div>
                <div className="h-96 w-96 bg-amber-500/10 absolute bottom-10 right-10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="max-w-xl">
                            <div className="flex items-center mb-4">
                                <div className="h-1 w-12 bg-amber-500 mr-4"></div>
                                <h2 className="text-xl text-amber-500 font-medium uppercase tracking-wider">
                                    Front-End Developer
                                </h2>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-white">Evgen Velychko</span>
                                <span className="block mt-2">
                                    <span className="text-amber-500">
                                        PORTFOLIO
                                    </span>
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg mb-10">
                                I'm a front-end developer with a passion for
                                creating innovative and efficient web
                                applications. With extensive experience in
                                various technologies and tools, I can
                                effectively implement projects of any scale.
                            </p>

                            <div className="flex space-x-4">
                                <a
                                    href="#portfolio"
                                    className="px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition-colors duration-300">
                                    View My Work
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 order-1 md:order-2">
                        <div className="relative mx-auto max-w-md">
                            <div className="absolute -inset-0.5 bg-amber-500 rounded-lg blur-sm"></div>
                            <div className="relative w-full h-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-amber-500/50">
                              
                                <img
                                    src="../../src/assets/Photo.png"
                                    alt="Professional portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#about"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-amber-500 transition-colors duration-300 animate-bounce">
                <ChevronDown size={32} />
            </a>
        </section>
    );
};
