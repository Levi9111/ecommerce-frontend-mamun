import Marquee from 'react-fast-marquee';
import hero1 from '../../assets/images/hero-1.png';
import hero2 from '../../assets/images/hero-2.png';
import hero3 from '../../assets/images/hero-3.png';
import stone from '../../assets/images/stone.png';

const companies = ['A', 'B', 'C', 'D', 'E', 'F'];

const Hero = () => {
  return (
    <div>
      <div className='w-full h-screen overflow-hidden relative border-b-[1px] border-white'>
        <img
          src={hero1}
          alt='Hero'
          className='w-full h-full scale-125 absolute top-0 left-0 right-0'
        />
        <div className='relative z-20 h-full  flex flex-col items-start justify-center pl-8 bg-black bg-opacity-10'>
          <p className='text-xl uppercase text-white font-bold tracking-wide'>
            Handcrafted for your health
          </p>
          <p className='text-5xl text-white  font-bold mt-3 mb-6 tracking-wider'>
            Coller Drinkwate
          </p>
          <button className='custom-button mb-6'>Shop Copper</button>

          <button className='custom-button'>Shop All Products</button>
        </div>
      </div>
      <Marquee
        className='h-20 bg-brand rounded-b-base text-white font-bold text-3xl bg-stone-pattern '
        autoFill={false}
        speed={50}
        pauseOnHover={true}
      >
        <ul className='flex items-center justify-between w-screen mr-60'>
          {companies.map((item, index) => (
            <li key={index} className='text-[#FDC417] font-fundamento'>
              {item}
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default Hero;
