function ProductCard({ product, addToCart }) {
  const handleItemClick = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      
      <div 
        className="card-img-wrapper" 
        onClick={handleItemClick}
      >
        {product.origin_price > product.price && (
          <span className="on-sale-badge">
            On Sale
          </span>
        )}

        <picture>
          {/* 桌機版圖片 (lg 以上) */}
          <source media="(min-width: 992px)" srcSet={product.image_resized} />
          
          {/* 手機版/預設圖片 */}
          <img 
            src={product.image} 
            alt={product.name} 
          />
        </picture>
      </div>

      <div className="card-content">
        <h3 className="card-title">
            {product.name}
        </h3>
        
        <div className="price-group">
            <span className="current-price">NT${product.price.toLocaleString()}</span>
            {product.origin_price > product.price && (
              <span className="origin-price">
                NT${product.origin_price.toLocaleString()}
              </span>
            )}
        </div>
      </div>

    </div>
  );
}

export default ProductCard;