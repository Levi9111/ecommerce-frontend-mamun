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
    <div className='flex flex-col items-center justify-center py-14'>
      <h4 className='text-[22px] text-black uppercase'>Fly Away with Ababil</h4>
      <h3 className='font-fundamento text-brand text-5xl capitalize mt-4'>
        Shop by ababil
      </h3>

      {/* cards */}
      <div className=''>
        {categories.map((category, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
