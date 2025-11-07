'use client';

import './footer.scss';
import Icon_logo from '@/components/icons/icon-logo';
import Icon_socials from '@/components/icons/Icon-socials';
import { useLenis } from '@studio-freight/react-lenis';

type FooterNavItemProps = {
    name: string;
    href: string;
};

const ITEMS = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

function FooterNavItem({ name, href }: FooterNavItemProps) {
    const lenis = useLenis();

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        lenis.scrollTo(href, { offset: 100 });
    };

    return (
        <li onClick={handleClick} className='footer__navigation-item'>
            <a href={href}>{name}</a>
        </li>
    );
}

export default function Footer() {
    const lenis = useLenis();

    return (
        <footer className='footer'>
            <div className='container footer__container'>
                <div className='footer__contacts-wrapper'>
                    <div className='footer__logo-wrapper'>
                        <div className='footer__logo'>
                            <Icon_logo />
                        </div>
                        <p className='footer__logo-text'>
                            AI/ML Developer passionate about creating intelligent solutions
                        </p>
                    </div>
                    <small className='footer__contacts-subheading'>Contact</small>
                    <div className='footer__address-wrapper'>
                        <address className='footer__address'>Available for opportunities</address>
                        <small className='footer__writeus'>
                            or write
                            <a href='mailto:kartikmhatre1812@gmail.com' className='footer__email'>
                                kartikmhatre1812@gmail.com
                            </a>
                        </small>
                    </div>
                    <ul className='footer__socials-list'>
                        <li className='footer__socials-item'>
                            <a href='https://github.com/Kartikmhatre' target='_blank' rel='noopener noreferrer'>
                                <Icon_socials icon='github' />
                            </a>
                        </li>
                        <li className='footer__socials-item'>
                            <a href='https://www.linkedin.com/in/kartik-mhatre-4768b238a/' target='_blank' rel='noopener noreferrer'>
                                <Icon_socials icon='linkedin' />
                            </a>
                        </li>
                        <li className='footer__socials-item'>
                            <a href='https://twitter.com/Kartikmhatre18' target='_blank' rel='noopener noreferrer'>
                                <Icon_socials icon='twitter' />
                            </a>
                        </li>
                        <li className='footer__socials-item'>
                            <a href='mailto:kartikmhatre1812@gmail.com'>
                                <Icon_socials icon='email' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__navigation-wrapper'>
                    <small className='footer__navigation-subheading'>navigation</small>
                    <ul className='footer__navigation-list'>
                        {ITEMS.map(({ name, href }, i) => (
                            <FooterNavItem key={i} name={name} href={href} />
                        ))}
                    </ul>
                </div>
                <div className='footer__projects-wrapper'>
                    <small className='footer__projects-subheading'>Projects</small>
                    <ul className='footer__projects-list'>
                        <li onClick={() => lenis.scrollTo('#projects', { offset: 100 })} className='footer__projects-item'>
                            1TimeMail
                        </li>
                        <li onClick={() => lenis.scrollTo('#projects', { offset: 100 })} className='footer__projects-item'>
                            PrepWise
                        </li>
                        <li onClick={() => lenis.scrollTo('#projects', { offset: 100 })} className='footer__projects-item'>
                            MediaCraft
                        </li>
                    </ul>
                </div>
                <div className='footer__copyright-wrapper'>
                    <small className='footer__copyright'>© 2025</small>
                    <small className='footer__copyright'>Otisium - Kartik Mhatre</small>
                </div>
            </div>
        </footer>
    );
}
