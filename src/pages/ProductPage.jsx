import { useState, useEffect, useMemo } from 'react';

function ProductPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 這是你的 API
    fetch('https://raw.githubusercontent.com/hexschool/js-training/refs/heads/main/craftsman.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data); // 假設 API 回傳的是陣列
        setLoading(false);
      })
      .catch(err => console.error("寶石上有雜質（API Error）:", err));
  }, []);

  // 使用 useMemo 優化篩選效能，這是『練』的體現
  const filteredProducts = useMemo(() => {
    if (filterType === 'All') return products;
    return products.filter(p => p.category === filterType); // 假設 API 有 category 欄位
  }, [products, filterType]);

  // 取得所有分類
  const categories = ['All', ...new Set(products.map(p => p.category))];

  if (loading) return <div className="text-center mt-5">正在鑑定寶石中...</div>;

  return (
    <div className="container mt-4">
      {/* 篩選區塊 */}
      <div className="mb-4">
        <select 
          className="form-select w-auto" 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* 商品列表 - 記得使用 RWD Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredProducts.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm">
              {/* 圖片處理：必須自適應 (img-fluid 或 object-fit) */}
              <img 
                src={product.images} 
                className="card-img-top" 
                alt={product.title} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                   <span className="h5 mb-0">NT$ {product.price}</span>
                   <button 
                     className="btn btn-primary"
                     onClick={() => addToCart(product)}
                   >
                     加入購物車
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;