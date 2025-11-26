import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import ProductCard from '../components/ProductCard';

function ProductPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterType = searchParams.get('category') || 'All';

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(12);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://raw.githubusercontent.com/hexschool/js-training/refs/heads/main/craftsman.json');
        setProducts(res.data.products || []);
        setIsLoading(false);
      } catch (error) {
        console.error("API Error:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    992: 3,
    768: 2,
    576: 2
  };

  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    products.forEach(p => {
      if (!counts[p.category]) {
        counts[p.category] = 0;
      }
      counts[p.category]++;
    });
    return counts;
  }, [products]);

  const categories = ['All', 'Cup', 'Plate', 'Bowl', 'Vase'];

  const filteredProducts = useMemo(() => {
    if (filterType === 'All') return products;
    return products.filter(p => p.category === filterType);
  }, [products, filterType]);

  const handleFilterChange = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }

    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center py-5" style={{ marginTop: '120px' }}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='product-page-wrapper'>
      
      <div className="filter-bar">
        <div className="container">
          <ul className="list-inline mb-0">
            {categories.map(cat => (
              <li className="list-inline-item" key={cat}>
                <button
                  className={`filter-btn ${filterType === cat ? 'active' : ''}`}
                  onClick={() => handleFilterChange(cat)}
                >
                  {cat}
                  <span className="count-badge">
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-wrapper container">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center text-muted py-5">
            沒有找到分類為「{filterType}」的商品。
          </div>
        ) : (
          <>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'
            >
              {currentItems.map(product => (
                <div key={product.id} className='card-bottom-gap'>
                  <ProductCard
                    product={product}
                    addToCart={addToCart}
                  />
                </div>
              ))}
            </Masonry>

            {totalPages > 1 && (
              <ul className="custom-pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <li 
                    key={number} 
                    className={`page-item ${currentPage === number ? 'active' : ''}`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;