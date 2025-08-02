import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/homepage';
import ProductPage from '../pages/products/products-overview';
import ServicePage from '../pages/services/index';
import MethodologyPage from '../pages/methodologies/index';
import NotFound from '../pages/NotFound';

const Routing = () => {
  const navigate = useNavigate();
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ProductPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/products/:productId" element={<ProductPage />} />

      
      {/* Services Routes */}
      <Route path="/services" element={<ServicePage />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
      
      {/* Methodologies Routes */}
      <Route path="/methodologies" element={<MethodologyPage/>} />
      <Route path="/methodologies/:methodologyId" element={<MethodologyPage />} />
      
      {/* 404 Route - Catch all undefined routes */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Routing;