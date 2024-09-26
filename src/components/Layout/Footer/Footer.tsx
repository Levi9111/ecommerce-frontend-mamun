import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Facebook,
  FacebookIcon,
  Instagram,
  Linkedin,
  MoveRightIcon,
} from 'lucide-react';
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { FaFacebookSquare } from 'react-icons/fa';

const knowMore = [
  {
    title: 'About',
    path: 'about',
  },
  {
    title: 'Privacy Policy',
    path: 'privacy-policy',
  },
  {
    title: 'Terms & Conditions',
    path: 'terms-and-conditions',
  },
  {
    title: 'Contact us',
    path: 'contact',
  },
  {
    title: 'FAQ',
    path: 'faq',
  },
];

const help = [
  {
    title: 'Brass Care',
    path: '',
  },
  {
    title: 'Kansa Care',
    path: '',
  },
  {
    title: 'Copper Care',
    path: '',
  },
  {
    title: 'Shipping',
    path: '',
  },
  {
    title: 'Return',
    path: '',
  },
];

const icons = [
  {
    icon: <InstagramLogoIcon className='text-brand' />,
    path: '',
  },
  {
    icon: <FaFacebookSquare className='text-brand' />,
    path: '',
  },
  {
    icon: <LinkedInLogoIcon className='text-brand' />,
    path: '',
  },
];

const Footer = () => {
  return (
    <footer className='md:rounded-t-base bg-brand bg-stone-pattern px-9 pt-12 pb-6 text-white'>
      <div className='flex items-start justify-between'>
        <div className=''>
          <img src={logo} alt='Logo' width={65} height={65} className='mb-4' />
          <p className='text-2xl'>Owned by</p>
          <p>ECB Chattar,</p>
          <p>Dhaka-Cantonment,</p>
          <p>Dhaka-1206.</p>
        </div>
        <div className=''>
          <h3 className='font-fundamento font-light text-3xl'>Know More</h3>
          <ul className='space-y-2 mt-4 '>
            {knowMore.map((item) => (
              <li key={item.title} className='capitalize  text-lg'>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <h3 className='font-fundamento text-3xl font-light'>Help</h3>
          <ul className='space-y-2 mt-4'>
            {help.map((item) => (
              <li key={item.title} className='capitalize text-lg'>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='max-w-[30%]'>
          {/* Newsletter */}
          <h3 className='font-fundamento text-3xl font-light capitalize'>
            Join Our Email List
          </h3>
          <p className='mt-4 text-md'>
            Never Miss a Deal! Stay tuned for our latest promotions, new
            launches, and exciting updates.
          </p>
          {/* input  */}
          <div className='flex w-full items-center space-x-2 mt-6 border-b-2 border-white rounded-lg'>
            <Input
              className='placeholder:text-white border-transparent '
              type='email'
              placeholder='Enter Email '
            />
            <Button
              type='submit'
              className='bg-transparent hover:bg-transparent flex items-center justify-center gap-3'
            >
              <p className='block'>Subscribe</p>
              <MoveRightIcon />
            </Button>
          </div>
          <div className='flex items-center justify-start gap-3 mt-4'>
            {icons.map((icon, i) => (
              <span
                key={i}
                className='flex items-center justify-center w-7 h-7 bg-white rounded-full '
              >
                <a href={icon.path}>{icon.icon}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className='block h-[1px] w-full bg-white mt-32' />
      <p className='capitalize text-center pt-6'>
        &copy; {new Date().getFullYear()},Ababil, All right Reserved
      </p>
    </footer>
  );
};

export default Footer;
