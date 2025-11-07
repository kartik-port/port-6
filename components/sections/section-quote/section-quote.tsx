import '@/components/sections/section-quote/section-quote.scss';
import Icon_quote from '../../icons/icon-quote';
import Image from 'next/image';

export default function SectionQuote() {
    return (
        <section className='section-quote'>
            <div className='container section-quote__container'>
                <div className='section-quote__top-line'>
                    <div className='section-quote__quote-icon'>
                        <Icon_quote />
                    </div>
                    <small className='section-quote__top-caption'>My Mission</small>
                </div>
                <ul className='section-quote__list'>
                    <li className='section-quote-item'>
                        <q className='section-quote-quote-text'>
                            I'm an AI/ML student passionate about building intelligent web applications that solve real-world problems. My projects combine modern web technologies with artificial intelligence to create innovative solutions.
                        </q>
                        <div className='section-quote__person'>
                            <div className='section-quote__person-image'>
                                <Image
                                    src={'/img/quote-avatar-1.jpg'}
                                    alt={'Kartik Mhatre'}
                                    fill={true}
                                    sizes='(max-width: 768px) 200px, (max-width: 1200px) 400px'
                                />
                            </div>
                            <div className='section-quote__person-text'>
                                <strong className='section-quote__person-name'>Kartik Mhatre</strong>
                                <small className='section-quote__person-position'>
                                    AI/ML Developer, <br /> Full-Stack Developer
                                </small>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
