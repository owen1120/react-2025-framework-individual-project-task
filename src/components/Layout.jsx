import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // 使用 NavLink 來處理選單啟動狀態
import CartModal from './CartModal';

function Layout({ children, cart, removeFromCart }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      
        {/* --- Header 區域 --- */}
        <nav className="header navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                {/* 購物車按鈕 */}
                <button className="btn mobile-cart position-relative" onClick={() => setShowModal(true)}                            >
                    <span class="material-symbols-outlined">shopping_cart</span>
                </button>

                <Link className="navbar-brand fw-bold fs-3 fst-italic mx-0" to="/">
                    Craftsman
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="material-symbols-outlined">menu</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link px-3" to="">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3" to="">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-3" to="">Contact</NavLink>
                        </li>
                        <li className="nav-item desktop-cart ms-lg-3">
                            {/* 購物車按鈕 */}
                            <button className="btn position-relative" onClick={() => setShowModal(true)}                            >
                                <span class="material-symbols-outlined">shopping_cart</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* --- Main 內容區域 --- */}
        {/* flex-grow-1: 這招很重要！它會自動填滿剩餘空間，把 Footer 往下推 */}
        <main className="flex-grow-1">
            {children}
        </main>

        {/* --- Footer 區域 --- */}
        <footer className="footer bg-dark text-white py-4 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="text-centermb-3 mb-md-0">
                        <p className="fs-2 fw-bold text-white">Subscribe for news and special offers!</p>
                        <div className="input-group custom-subscribe-group">
                            <input type="email" className="form-control" placeholder="Your email address" aria-label="Your email address" 
                            />
                            <button className="btn btn-success" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="text-center">
                        <h5 className="fs-3 fw-bold fst-italic mb-5">Craftsman</h5>
                        <ul className="list-inline d-flex mb-0">
                            <li className="list-inline-item"><a href="#" className="text-decoration-none">Purchase Policy</a></li>
                            <li className="list-inline-item mx-3"><a href="#" className="text-decoration-none">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#" className="text-decoration-none">Terms & Conditions</a></li>
                        </ul>
                        <p className="small text-white-50 mt-2 mb-0">© 2025 Biscuit Krueger.</p>
                    </div>
                </div>
            </div>
        </footer>

        {/* 共用的購物車 Modal */}
        <CartModal 
            show={showModal} 
            handleClose={() => setShowModal(false)} 
            cart={cart}
            removeFromCart={removeFromCart}
        />
    </div>
  );
}

export default Layout;