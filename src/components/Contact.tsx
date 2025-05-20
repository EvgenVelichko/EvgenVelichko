/** @format */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<
        'idle' | 'submitting' | 'success' | 'error'
    >('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            const deviceInfo = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                screenSize: `${window.screen.width}x${window.screen.height}`,
            };

            const { error } = await supabase.from('messages').insert([
                {
                    ...formData,
                    device_info: deviceInfo,
                },
            ]);

            if (error) throw error;

            const response = await fetch(
                `${
                    import.meta.env.VITE_SUPABASE_URL
                }/functions/v1/telegram-notification`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_SUPABASE_ANON_KEY
                        }`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...formData,
                        timestamp: new Date(),
                        deviceInfo,
                    }),
                },
            );

            if (!response.ok) throw new Error('Failed to send notification');

            setFormData({ name: '', email: '', subject: '', message: '' });
            setFormStatus('success');

            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setFormStatus('error');

            setTimeout(() => {
                setFormStatus('idle');
            }, 3000);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: 'Email',
            content: 'evgenvelichko4@gmail.com',
            link: 'mailto:evgenvelichko4@gmail.com',
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            content: '+38 (095) 923-7139',
            link: 'tel:+380959237139',
        },
        {
            icon: <MapPin size={24} />,
            title: 'Location',
            content: 'Vinnitsa, Ukraine',
            link: 'https://www.google.com/maps/place/%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%B0,+%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+21000/@49.2347047,28.3872333,12z/data=!3m1!4b1!4m6!3m5!1s0x472d5b65195a6489:0xcbd4e159eedd74fe!8m2!3d49.233083!4d28.4682169!16zL20vMDRod3Y3?hl=ru&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        CONTACT <span className="text-amber-500">ME</span>
                    </h2>
                    <div className="h-1 w-24 bg-amber-500 mx-auto mt-4"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential
                        opportunities? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold mb-6">
                            Get In Touch
                        </h3>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="mr-4 p-3 bg-gray-700 rounded-lg text-amber-500">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium">
                                            {info.title}
                                        </h4>
                                        <a
                                            href={info.link}
                                            className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                                            {info.content}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex space-x-4">
                            <a
                                href="https://evgenvelichko.github.io/EvgenVelichko/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-700 rounded-full text-white hover:bg-amber-500 transition-colors duration-300">
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/EvgenVelichko"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-700 rounded-full text-white hover:bg-amber-500 transition-colors duration-300">
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-700 rounded-lg p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white resize-none"
                                    placeholder="Hello, I'd like to discuss a project..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-amber-500 text-gray-900 font-medium py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center">
                                {formStatus === 'submitting' ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <Send size={18} className="mr-2" />
                                        Send Message
                                    </span>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <div className="mt-4 p-3 bg-green-800 text-green-100 rounded-lg">
                                    Your message has been sent successfully.
                                    I'll get back to you soon!
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="mt-4 p-3 bg-red-800 text-red-100 rounded-lg">
                                    There was an error sending your message.
                                    Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
