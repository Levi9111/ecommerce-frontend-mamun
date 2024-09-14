import { Button } from './components/ui/button';
import { useGetAllProductsQuery } from './redux/product/productApi';

const App = () => {
  const { data } = useGetAllProductsQuery(undefined);
  console.log(data);
  return (
    <div>
      <Button variant='destructive'>Test</Button>
    </div>
  );
};

export default App;
