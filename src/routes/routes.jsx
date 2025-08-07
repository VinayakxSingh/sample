import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/homepage';
import ProductPage from '../pages/products/products-overview';
import MethodologyPage from '../pages/methodologies/methodologies-overview';
import IPPortfolio from '../pages/IPPortfolio/ip-portfolio';
import Articles from '../pages/Articles/Articles';
import ArticleDetail from '../pages/ArticleDetail/ArticleDetail';
import NotFound from '../pages/NotFound/not-found';

const Routing = () => {
  const navigate = useNavigate();
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<ProductPage />} />
      <Route path="/product" element={<ProductPage />} />
      
      {/* Methodologies Routes */}
      <Route path="/methodologies" element={<MethodologyPage/>} />     
      
      {/* IP Portfolio Routes */}
      <Route path="/ip-portfolio" element={<IPPortfolio />} />
      
      {/* Articles Routes */}
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />
      
      {/* 404 Route - Catch all undefined routes */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default Routing;