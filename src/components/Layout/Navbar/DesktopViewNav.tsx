import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import logo from '../../../assets/logo/logo.png';
import logoRed from '../../../assets/logo/logo-red.png';
import { Search, ShoppingBag, UserCircle2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';
const DesktopViewNav = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <div className='left-0 right-0 z-20'>
      <div className='flex items-center justify-between w-[95%] mx-auto'>
        <div
          className={cn(
            'flex items-center gap-4 font-semibold uppercase',
            scrolled ? 'text-brand' : 'text-white',
          )}
        >
          <HamburgerMenuIcon className='w-[28px] h-[28px]' />
          <p className='text-2xl'>Shop</p>
        </div>
        <div className=''>
          <img
            src={scrolled ? logoRed : logo}
            alt='Logo'
            height={40}
            width={40}
          />
        </div>

        <div
          className={cn(
            'flex items-center gap-4 font-semibold uppercase',
            scrolled ? 'text-brand' : 'text-white',
          )}
        >
          <UserCircle2Icon />
          <Search />
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default DesktopViewNav;
