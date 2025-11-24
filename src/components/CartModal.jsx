import { useEffect, useRef } from 'react';

// 接收 props: show (控制顯示), handleClose (關閉函式), cart (購物車資料), removeFromCart (刪除函式)
function CartModal({ show, handleClose, cart, removeFromCart }) {
  
  // 計算總金額 (這就是簡單的『發』，邏輯運算)
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // 這裡我們手動控制 Bootstrap Modal 的 class
  // 當 show 為 true 時，加上 'show' 和 'd-block' 讓它顯示
  return (
    <>
      {/* 背景遮罩 (Backdrop) */}
      {show && <div className="modal-backdrop fade show" onClick={handleClose}></div>}

      <div 
        className={`modal fade ${show ? 'show d-block' : ''}`} 
        tabIndex="-1" 
        role="dialog"
        // 點擊 Modal 外部關閉的邏輯可以寫在 backdrop，這裡為了保險起見可以加
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">購物車 ({cart.length} 件商品)</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={handleClose} 
                aria-label="Close"
              ></button>
            </div>
            
            <div className="modal-body">
              {cart.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  <p>你的購物車空空如也，像剛入門的念能力者一樣。</p>
                  <small>快去選購一些寶石吧！</small>
                </div>
              ) : (
                <ul className="list-group list-group-flush">
                  {cart.map((item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                      <div className="d-flex align-items-center">
                        {/* 圖片縮圖 */}
                        <img 
                          src={item.images} 
                          alt={item.title} 
                          className="rounded me-3 object-fit-cover" 
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div>
                          <h6 className="mb-0 text-truncate" style={{ maxWidth: '150px' }}>{item.title}</h6>
                          <small className="text-muted">NT$ {item.price} x {item.qty}</small>
                        </div>
                      </div>
                      
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <span className="visually-hidden">刪除</span>
                        X {/* 或者放個垃圾桶 icon */}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="modal-footer justify-content-between">
              <h5 className="mb-0">總計: <span className="text-primary">NT$ {totalPrice}</span></h5>
              <button type="button" className="btn btn-primary" onClick={() => alert('結帳功能還沒修煉好喔！')}>
                前往結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;