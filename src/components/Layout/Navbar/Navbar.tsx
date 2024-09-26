import { useEffect, useState } from 'react';
import DesktopViewNav from './DesktopViewNav';
import { cn } from '@/lib/utils';
import ResponsiveNav from './ResponsiveNav';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav
      className={cn(
        scrolled ? 'bg-[#F9F5EC] py-5 fixed' : 'bg-transparent py-4 static',
        'z-50 w-full transition duration-300 ',
        !scrolled && 'absolute ',
      )}
      style={{
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className='md:block hidden'>
        <DesktopViewNav scrolled={scrolled} />
      </div>

      <div className='md:hidden block'>
        <ResponsiveNav />
      </div>

      <div
        className={cn(
          isActive ? 'block' : 'hidden',
          'md:hidden bg-[#F9F5EC] h-[47px] w-full absolute',
        )}
      ></div>
    </nav>
  );
}

export default Navbar;
