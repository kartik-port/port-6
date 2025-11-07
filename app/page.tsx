import SectionContact from '@/components/sections/section-contact/section-contact';
import SectionHero from '@/components/sections/section-hero/section-hero';
import SectionProjects from '@/components/sections/section-projects/section-projects';
import SectionQuote from '@/components/sections/section-quote/section-quote';
import SectionWhyus from '@/components/sections/section-whyus/section-whyus';

export default function Home() {
    return (
        <>
            <SectionHero />
            <SectionQuote />
            <SectionWhyus />
            <SectionProjects />
            <SectionContact />
        </>
    );
}
