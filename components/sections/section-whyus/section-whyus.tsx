'use client';

import './section-whyus.scss';
import Image from 'next/image';
import Icon_arrow from '../../icons/icon-arrow';
import { useState } from 'react';

export default function SectionWhyus() {
    const [currentBullet, setCurrentBullet] = useState(1);

    return (
        <section id='about' className='section-whyus'>
            <div className='container section-whyus__container'>
                <div className='section-whyus__banner'>
                    <div className='section-whyus__banner-image'>
                        <Image src={'/img/whyus-image.jpg'} alt='background' fill={true} sizes='75vw' priority />
                    </div>
                    <div className='section-whyus__banner-text'>
                        <small className='section-whyus__top-caption'>About Me</small>
                        <h2 className='section-whyus__banner-heading'>Building the future, one project at a time</h2>
                    </div>
                </div>

                <div className='section-whyus__bullets-picker'>
                    <small className='section-whyus__bullets-caption'>My Skills</small>
                    <ul className='section-whyus__bullets-list'>
                        <li
                            onMouseEnter={() => setCurrentBullet(1)}
                            className={currentBullet === 1 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Frontend Development</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li
                            onMouseEnter={() => setCurrentBullet(2)}
                            className={currentBullet === 2 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Backend & AI/ML</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li
                            onMouseEnter={() => setCurrentBullet(3)}
                            className={currentBullet === 3 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Problem Solving</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                        <li
                            onMouseEnter={() => setCurrentBullet(4)}
                            className={currentBullet === 4 ? 'section-whyus__bullets-item active' : 'section-whyus__bullets-item'}>
                            <span className='section-whyus__bullets-item-text'>Full-Stack Solutions</span>
                            <span className='section-whyus__bullets-item-icon'>
                                <Icon_arrow direction='right' />
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='section-whyus__bullets-description'>
                    <div className={currentBullet === 1 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Frontend <br /> Development
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            Proficient in modern frontend technologies including React, Next.js, HTML, CSS, and JavaScript. I create responsive, user-friendly interfaces with a focus on performance and accessibility. My frontend work emphasizes clean code, modern design patterns, and optimal user experiences.
                        </p>
                    </div>

                    <div className={currentBullet === 2 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Backend <br /> & AI/ML
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            Experienced with Node.js for backend development and Python for AI/ML projects. I work with TensorFlow, Scikit-learn, and Natural Language Processing to build intelligent systems. My backend solutions are scalable, secure, and optimized for performance.
                        </p>
                    </div>

                    <div className={currentBullet === 3 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Problem <br /> Solving
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            I enjoy tackling complex challenges and creating innovative solutions. From temporary email services to AI-powered interview preparation tools, I build applications that make a difference. My approach combines analytical thinking with creative problem-solving.
                        </p>
                    </div>

                    <div className={currentBullet === 4 ? 'section-whyus__bullets-slide active' : 'section-whyus__bullets-slide'}>
                        <h3 className='section-whyus__bullets-heading'>
                            Full-Stack <br /> Solutions
                        </h3>
                        <p className='section-whyus__bullets-text'>
                            I'm a passionate AI/ML student and full-stack developer with expertise in React, Next.js, Node.js, and JavaScript. I love building intelligent applications that solve real-world problems and bridge the gap between cutting-edge technology and practical solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
