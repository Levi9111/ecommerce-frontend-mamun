import { Outlet } from 'react-router-dom';
import Footer from './components/Layout/Footer/Footer';
import Navbar from './components/Layout/Navbar/Navbar';
import { useGetAllProductsQuery } from './redux/product/productApi';

const App = () => {
  const { data } = useGetAllProductsQuery(undefined);
  return (
    <div className='relative'>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
