import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../pages/Home/homepage';
import ProductPage from '../pages/products/products-overview';
import { ServicePage  } from '../pages/Services/index';
import { MethodologyPage } from '../pages/Methodologies/index';

const Routing = () => {
  const navigate = useNavigate();
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:productId" element={<ProductPage />} />

      
      {/* Services Routes */}
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
      
      {/* Methodologies Routes */}
      <Route path="/methodologies" element={<MethodologiePage/>} />
      <Route path="/methodologies/:methodologyId" element={<MethodologiePage />} />
    </Routes>
  );
};

export default Routing;