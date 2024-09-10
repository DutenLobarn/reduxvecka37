import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct,addProduct, clearProducts } from './Redux/slices/products/productsSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct()) 
  }, [dispatch])

  const handleAddProduct = () => {
    const newProduct = { id: 1, name: 'New Product' };
    dispatch(addProduct(newProduct)); // Dispatcha en action för att lägga till en produkt
  };

  const handleClearProducts = () => {
    dispatch(clearProducts()); // Dispatcha en action för att rensa alla produkter
  };
  

  const { items } = useSelector((state) => state.products)

  
  console.log(items)

  return (
   <div>

<button onClick={handleAddProduct}>Add Product</button>
<button onClick={handleClearProducts}>Clear Products</button>
   
   </div>
  )
}

export default App
