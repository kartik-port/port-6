'use client';

import './section-projects.scss';
import Icon_arrow from '../../icons/icon-arrow';
import SectionProjectsList from './section-projects-list';
import { useState } from 'react';

export type objectData = {
    imageSrc: string;
    name: string;
    description: string;
    params: {
        name: string;
        value: string;
    }[];
    features: string[];
    price: string;
};

const OBJECTS: objectData[] = [
    {
        imageSrc: '/img/project-image-1.jpg',
        name: '1TimeMail',
        description: 'Temporary Email Service - A secure and anonymous temporary email solution for quick registrations and privacy protection.',
        params: [
            {
                name: 'Technology',
                value: 'Next.js, Node.js',
            },
            {
                name: 'Category',
                value: 'Web Service',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'Anonymous email addresses',
            'Real-time inbox updates',
            'Secure and private',
            'No registration required',
            'Auto-delete functionality',
            'Multiple domain support',
        ],
        price: 'https://1timemail.org/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'UPI Link Generator',
        description: 'Payment Gateway - Generate UPI payment links instantly for seamless transactions and payment collection.',
        params: [
            {
                name: 'Technology',
                value: 'React, Node.js',
            },
            {
                name: 'Category',
                value: 'Payment Tool',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'Instant UPI link generation',
            'QR code support',
            'Multiple payment apps',
            'Transaction tracking',
            'Easy integration',
            'Secure payments',
        ],
        price: 'https://upilinkgenerator.vercel.app/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'PatterNix',
        description: 'CSS Pattern Library - A collection of beautiful CSS patterns and backgrounds for modern web design.',
        params: [
            {
                name: 'Technology',
                value: 'React, CSS',
            },
            {
                name: 'Category',
                value: 'Design Tool',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            '100+ CSS patterns',
            'Copy-paste ready code',
            'Customizable colors',
            'Responsive designs',
            'Performance optimized',
            'Free to use',
        ],
        price: 'https://patter-nix.vercel.app/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'MediaCraft',
        description: 'AI Image Editor - Advanced image editing powered by AI with background removal and enhancement features.',
        params: [
            {
                name: 'Technology',
                value: 'React, AI/ML',
            },
            {
                name: 'Category',
                value: 'AI Tool',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'AI-powered editing',
            'Background removal',
            'Image enhancement',
            'Batch processing',
            'High-quality output',
            'Easy to use',
        ],
        price: 'https://mediacraft.onrender.com/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'FlexiPDF',
        description: 'PDF Tools - Comprehensive PDF manipulation tools including merge, split, compress, and convert functionality.',
        params: [
            {
                name: 'Technology',
                value: 'React, Node.js',
            },
            {
                name: 'Category',
                value: 'PDF Tool',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'Merge multiple PDFs',
            'Split PDF documents',
            'Compress file size',
            'Convert formats',
            'Secure processing',
            'No file uploads',
        ],
        price: 'https://flexipdf-m7e1.onrender.com/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'PrepWise',
        description: 'AI Interview Prep - Intelligent interview preparation tool with AI-powered question generation and practice sessions.',
        params: [
            {
                name: 'Technology',
                value: 'React, AI/ML',
            },
            {
                name: 'Category',
                value: 'AI Tool',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'AI-generated questions',
            'Personalized practice',
            'Multiple interview types',
            'Performance analytics',
            'Real-time feedback',
            'Comprehensive prep',
        ],
        price: 'https://inter-prep-wise.onrender.com/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'ImageEditGenie',
        description: 'Background Remover - Professional background removal tool with AI precision for clean image editing.',
        params: [
            {
                name: 'Technology',
                value: 'React, AI/ML',
            },
            {
                name: 'Category',
                value: 'AI Tool',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'AI background removal',
            'High precision editing',
            'Batch processing',
            'Multiple formats',
            'Fast processing',
            'Free to use',
        ],
        price: 'https://erasebg-3m4s.onrender.com/',
    },
    {
        imageSrc: '/img/project-image-1.jpg',
        name: 'Voice Chat AI',
        description: 'AI Voice Assistant - Interactive voice-based AI assistant for natural conversations and intelligent responses.',
        params: [
            {
                name: 'Technology',
                value: 'React, AI/ML',
            },
            {
                name: 'Category',
                value: 'AI Assistant',
            },
            {
                name: 'Status',
                value: 'Live',
            },
        ],
        features: [
            'Voice recognition',
            'Natural conversations',
            'Real-time responses',
            'Multiple languages',
            'Context awareness',
            'Seamless integration',
        ],
        price: 'https://voicechatai.wmart.in/',
    },
];

export default function SectionProjects() {
    const [currentObject, setCurrentObject] = useState(0);
    const lastObject = OBJECTS.length - 1;

    const handleClick = (dir: number) => {
        setCurrentObject((curr) => curr + dir);
    };

    return (
        <section id='projects' className='section-projects'>
            <div className='container section-projects__container'>
                <h2 className='section-projects__heading'>My Projects</h2>
                <SectionProjectsList objectList={OBJECTS} currentObject={currentObject} />
                <div className='section-projects__switcher'>
                    <button disabled={currentObject === 0} onClick={() => handleClick(-1)} className='section-projects__switcher-button'>
                        <Icon_arrow direction='left' />
                        <span>
                            Previous<span className='mobile-hidden'> project</span>
                        </span>
                    </button>
                    <button disabled={currentObject === lastObject} onClick={() => handleClick(1)} className='section-projects__switcher-button'>
                        <span>
                            Next<span className='mobile-hidden'> project</span>
                        </span>
                        <Icon_arrow direction='right' />
                    </button>
                </div>
            </div>
        </section>
    );
}
