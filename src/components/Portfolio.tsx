/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project/project1.webp';
import project2 from '../assets/project/project2.webp';
import project3 from '../assets/project/project3.webp';
import project4 from '../assets/project/project4.webp';
import project5 from '../assets/project/project5.webp';
import project6 from '../assets/project/project6.webp';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    description,
    image,
    tags,
    liveLink,
    githubLink,
}) => {
    return (
        <div className="group relative h-full">
            <div className="h-full rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full flex space-x-3">
                            {liveLink && (
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-amber-500 text-gray-900 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300">
                                    <ExternalLink size={18} />
                                </a>
                            )}
                            {githubLink && (
                                <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                    <Github size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-500 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-400 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Portfolio: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const sliderRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: 'Money-Finance',
            description:
                'Interactive dashboard for financial data visualization and analytics.',
            image: new URL('../assets/project/project1.webp', import.meta.url)
                .href,
            tags: ['index.html', 'CSS', 'JavaScript'],
            liveLink: 'https://evgenvelichko.github.io/The-Money/',
            githubLink: 'https://evgenvelichko.github.io/The-Money/',
        },
        {
            title: 'Car-Media',
            description:
                'This website is dedicated to the legendary Ford Mustang. Here, you can find articles about the model’s history.',
            image: new URL('../assets/project/project2.webp', import.meta.url)
                .href,
            tags: ['index.html', 'CSS', 'JavaScript'],
            liveLink: 'https://evgenvelichko.github.io/Products_Maket/',
            githubLink: 'https://github.com/EvgenVelichko/Products_Maket',
        },
        {
            title: 'Minimal-Agency',
            description:
                'Minimal is a full-service digital creative agency based in Ontario, Canada. Our passion is helping brands stand out in a competitive market.',
            image: new URL('../assets/project/project3.png', import.meta.url)
                .href,
            tags: ['index.html', 'CSS', 'JavaScript'],
            liveLink: 'https://evgenvelichko.github.io/Minimal-Agency/',
            githubLink: 'https://github.com/EvgenVelichko/Minimal-Agency',
        },
        {
            title: 'NotePad',
            description:
                'A sleek and functional text editor with a dark theme. It offers essential tools like saving, clearing, formatting, a built-in calculator.',
            image: new URL('../assets/project/project4.png', import.meta.url)
                .href,
            tags: ['index.html', 'CSS', 'JavaScript'],
            liveLink: 'https://evgenvelichko.github.io/Notepad/',
            githubLink: 'https://github.com/EvgenVelichko/Notepad',
        },
        {
            title: 'CoWork',
            description:
                'Coworking Space – A New Way to Work Discover a workspace designed for innovation and collaboration.',
            image: new URL('../assets/project/project5.png', import.meta.url)
                .href,
            tags: ['index.html', 'CSS', 'JavaScript'],
            liveLink: 'https://evgenvelichko.github.io/Cowork/',
            githubLink: 'https://github.com/EvgenVelichko/Cowork',
        },
        {
            title: 'PasswordGenerator',
            description:
                'This page is a password generator interface in Ukrainian. Users can create secure passwords by setting the length and choosing to include uppercase letters, lowercase letters, numbers, and symbols.',
                image: new URL('../assets/project/project6.png', import.meta.url).href,
            tags: ['index.html', 'CSS', 'JavaScript'],
            liveLink: 'https://evgenvelichko.github.io/PasswordGenerator/',
            githubLink: 'https://github.com/EvgenVelichko/PasswordGenerator',
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setVisibleProjects(3);
            } else if (window.innerWidth >= 768) {
                setVisibleProjects(2);
            } else {
                setVisibleProjects(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = projects.length - visibleProjects;

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${
                currentIndex * (100 / visibleProjects)
            }%)`;
        }
    }, [currentIndex, visibleProjects]);

    return (
        <section id="portfolio" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        MY <span className="text-amber-500">PORTFOLIO</span>
                    </h2>
                    <div className="h-1 w-24 bg-amber-500 mx-auto mt-4"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one
                        demonstrates my skills and approach to problem-solving.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                width: `${
                                    (projects.length / visibleProjects) * 100
                                }%`,
                            }}>
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: `${
                                            (100 / projects.length) *
                                            visibleProjects
                                        }%`,
                                    }}
                                    className="px-3">
                                    <Project
                                        title={project.title}
                                        description={project.description}
                                        image={project.image}
                                        tags={project.tags}
                                        liveLink={project.liveLink}
                                        githubLink={project.githubLink}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute top-1/2 left-4 -translate-y-1/2 bg-amber-500 text-gray-900 p-3 rounded-full z-10 hover:bg-amber-600 transition-colors duration-300 ${
                            currentIndex === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                        }`}>
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className={`absolute top-1/2 right-4 -translate-y-1/2 bg-amber-500 text-gray-900 p-3 rounded-full z-10 hover:bg-amber-600 transition-colors duration-300 ${
                            currentIndex >= maxIndex
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                        }`}>
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
