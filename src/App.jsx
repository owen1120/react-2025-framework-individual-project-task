import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';

function App() {
  // 初始化購物車 (嘗試從 localStorage 讀取)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('craftsmanCart');
    return saved ? JSON.parse(saved) : [];
  });

  // 當 cart 變動時，寫入 localStorage
  useEffect(() => {
    localStorage.setItem('craftsmanCart', JSON.stringify(cart));
  }, [cart]);

  // 加入購物車
  const addToCart = (product) => {
    const tempCart = [...cart];
    const existingItem = tempCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.qty += 1;
      setCart(tempCart);
      // alert(`已更新 ${product.name} 數量！`);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      // alert(`${product.name} 已加入購物車！`);
    }
  };

  // 更新數量
  const updateCartQty = (id, newQty) => {
    if (newQty < 1) {
      removeFromCart(id);
      return;
    }
    const tempCart = cart.map(item => 
      item.id === id ? { ...item, qty: newQty } : item
    );
    setCart(tempCart);
  }

  // 移除購物車
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Layout cart={cart} removeFromCart={removeFromCart} updateCartQty={updateCartQty}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/products" 
          element={<ProductPage addToCart={addToCart} />} 
        />
      </Routes>
    </Layout>
  );
}

export default App;