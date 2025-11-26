import React from 'react';

function CartOffcanvas({ show, handleClose, cart, removeFromCart, updateCartQty }) {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const shipping = subtotal > 0 ? 80 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {show && <div className="offcanvas-backdrop fade show cart-backdrop" onClick={handleClose}></div>}

      <div className={`offcanvas offcanvas-end cart-offcanvas ${show ? 'show' : ''}`} tabIndex="-1" id="cartOffcanvas">
        
        {/* Header: 標題與數量 */}
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            Cart List
            {totalQty > 0 && (
              <span className="cart-count-qty">{totalQty}</span>
            )}
          </h5>
          <button type="button" className="btn" onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="offcanvas-body d-flex flex-column p-0">
          {cart.length === 0 ? (
            <div className="text-center py-5 text-muted my-auto">
              <p className="mb-4">您的購物袋目前是空的。</p>
              <button className="btn btn-outline-success rounded-0 px-4" onClick={handleClose}>
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <>
              {/* 滾動區域 (包含商品列表 + 金額明細) */}
              <div className="cart-scroll-area flex-grow-1 overflow-auto px-4 pb-4">
                
                {/* 商品列表 */}
                <div className="cart-list">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="d-flex align-items-start">
                        {/* 圖片 */}
                        <div className="cart-item-imgs">
                          <img src={item.image} alt={item.name} className="cart-item-img" />
                        </div>
                        
                        {/* 資訊 */}
                        <div className="cart-content">
                          <div className="text-content">
                            <div className="text-title">
                              <h6 className="item-name">{item.name}</h6>
                              {/* 刪除按鈕 */}
                              <button className="btn" onClick={() => removeFromCart(item.id)}>
                                <span className="material-symbols-outlined fs-5">close</span>
                              </button>
                            </div>
                            
                            <div className="item-price">
                              NT${item.price.toLocaleString()}
                              {item.origin_price > item.price && (
                                <span className="item-origin-price">
                                  NT${item.origin_price.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* 數量控制與小計 */}
                          <div className="qty-control-wrapper d-flex justify-content-between align-items-end">
                            <div className="qty-control d-flex align-items-center">
                              <button 
                                className="btn btn-qty" 
                                onClick={() => updateCartQty(item.id, item.qty - 1)}
                              >
                                <span className="material-symbols-outlined">remove</span>
                              </button>
                              <span className="qty-display mx-3">{item.qty}</span>
                              <button 
                                className="btn btn-qty" 
                                onClick={() => updateCartQty(item.id, item.qty + 1)}
                              >
                                <span className="material-symbols-outlined">add</span>
                              </button>
                            </div>
                            <div className="item-subtotal">
                              NT${(item.price * item.qty).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 金額明細 */}
                <div className="cart-calculation">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>NT${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span>NT${shipping}</span>
                  </div>
                  <div className="total">
                    <span className="h4 fw-bold mb-0">Total</span>
                    <span className="h4 fw-bold mb-0">NT${total.toLocaleString()}</span>
                  </div>
                </div>

              </div>

              {/* 結帳按鈕 */}
              <div className="cart-fixed-bottom">
                <button className="btn checkout-btn">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartOffcanvas;