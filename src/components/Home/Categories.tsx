const categories = [
  {
    title: 'brass for cooking',
    path: '',
    style: 'bg-brass-pattern',
  },
  {
    title: 'copper for drinking',
    path: '',
    style: 'bg-kansa-pattern',
  },
  {
    title: 'kansa for eating',
    path: '',
    style: 'bg-copper-pattern',
  },
  {
    title: 'brass for cooking',
    path: '',
    style: 'bg-brass-pattern',
  },
];

const Categories = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-14 pb-20'>
      <h4 className='text-[22px] text-black uppercase'>Fly Away with Ababil</h4>
      <h3 className='font-fundamento text-brand text-5xl capitalize my-4'>
        Shop by ababil
      </h3>

      {/* cards */}
      <div className='grid md:grid-cols-4 gap-12'>
        {categories.map((category, i) => (
          <div
            key={i}
            className={`h-96 w-64 bg-red-300 ${category.style} bg-115 bg-no-repeat bg-center cursor-pointer hover:bg-150 transition-all duration-500  rounded-t-full overflow-hidsden text-black hover:text-brand relative`}
          >
            <p className='text-center mt-3 uppercase font-bold text-xl absolute -bottom-9 left-0 right-0'>
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
