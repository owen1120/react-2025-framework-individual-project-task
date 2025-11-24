// src/App.jsx
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // 記得確認這個檔案存在！
import HomePage from './pages/HomePage';   // 記得確認這個檔案存在！
import ProductPage from './pages/ProductPage'; // 記得確認這個檔案存在！

function App() {
  // --- 這裡是之後要放購物車邏輯的地方，我們先留空或是放簡單狀態 ---
  const [cart, setCart] = useState([]);
  const addToCart = () => {};
  const removeFromCart = () => {};
  // -------------------------------------------------------------

  return (
    // Layout 包住所有人，這樣導覽列(Navbar)才會一直存在
    <Layout cart={cart} removeFromCart={removeFromCart}>
      
      {/* Routes 決定中間要顯示哪一頁 */}
      <Routes>
        {/* 當網址是 / 時，顯示首頁 */}
        <Route path="/" element={<HomePage />} />
        
        {/* 當網址是 /products 時，顯示商品頁 */}
        <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
      </Routes>
      
    </Layout>
  );
}

export default App;