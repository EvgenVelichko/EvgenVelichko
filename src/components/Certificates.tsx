/** @format */

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface CertificateProps {
    title: string;
    issuer: string;
    date: string;
    image: string;
}

const Certificate: React.FC<CertificateProps> = ({
    title,
    issuer,
    date,
    image,
}) => {
    return (
        <div className="group">
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-amber-500 transition-colors duration-300">
                <div className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-amber-500 text-gray-900 p-2 rounded-full">
                        <Award size={16} />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-amber-500 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">
                        Issued by: {issuer}
                    </p>
                    <p className="text-gray-500 text-sm">{date}</p>
                </div>
            </div>
        </div>
    );
};

export const Certificates: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCertificates, setVisibleCertificates] = useState(3);
    const sliderRef = useRef<HTMLDivElement>(null);

    const certificates = [
        {
            title: 'Websites for schoolchildren',
            issuer: 'Ithillel',
            date: '30.12.2024',
            image: '../../public/assets/certificates/Certificates.webp',
        },
        {
            title: 'Nothing',
            issuer: 'Nothing',
            date: 'Nothing',
            image: '',
        },
        {
            title: 'Nothing',
            issuer: 'Nothing',
            date: 'Nothing',
            image: '',
        },
        {
            title: 'Nothing',
            issuer: 'Nothing ',
            date: 'Nothing',
            image: '',
        },
        {
            title: 'Nothing',
            issuer: 'Nothing',
            date: 'Nothing',
            image: '',
        },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setVisibleCertificates(3);
            } else if (window.innerWidth >= 768) {
                setVisibleCertificates(2);
            } else {
                setVisibleCertificates(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = certificates.length - visibleCertificates;

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${
                currentIndex * (100 / visibleCertificates)
            }%)`;
        }
    }, [currentIndex, visibleCertificates]);

    return (
        <section id="certificates" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        MY <span className="text-amber-500">CERTIFICATES</span>
                    </h2>
                    <div className="h-1 w-24 bg-amber-500 mx-auto mt-4"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        I'm committed to continuous learning and professional
                        development. Here are some of the certificates I've
                        earned throughout my career.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                width: `${
                                    (certificates.length /
                                        visibleCertificates) *
                                    100
                                }%`,
                            }}>
                            {certificates.map((certificate, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: `${
                                            (100 / certificates.length) *
                                            visibleCertificates
                                        }%`,
                                    }}
                                    className="px-3">
                                    <Certificate
                                        title={certificate.title}
                                        issuer={certificate.issuer}
                                        date={certificate.date}
                                        image={certificate.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                 
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
