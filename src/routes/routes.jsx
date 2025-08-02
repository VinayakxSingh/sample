import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/Home/homepage';
import { ProductPage as ProductsIndex } from '../pages/Products';
import { ServicePage as ServicesIndex } from '../pages/Services';
import { MethodologyPage as MethodologiesIndex } from '../pages/Methodologies';

const Routing = () => {
  const navigate = useNavigate();
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ProductsIndex />} />
      <Route path="/products/:productId" element={<ProductsIndex />} />
      
      {/* Services Routes */}
      <Route path="/services" element={<ServicesIndex />} />
      <Route path="/services/:serviceId" element={<ServicesIndex />} />
      
      {/* Methodologies Routes */}
      <Route path="/methodologies" element={<MethodologiesIndex />} />
      <Route path="/methodologies/:methodologyId" element={<MethodologiesIndex />} />
    </Routes>
  );
};

export default Routing;