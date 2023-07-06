import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { ProductList, ProductDetail } from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="product-detail/:product_id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
