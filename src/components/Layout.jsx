import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // 使用 NavLink 來處理選單啟動狀態
import CartModal from './CartModal';

import footer from '../assets/footer.jpg';

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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-5">
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
        <footer className="footer text-white mt-auto">
            <div className="img-box">
                <img src={footer} alt="footer" className="footer-desktop-bg-img" />
            </div>
            <div className="container">
                <div className="footer-content-top">
                    <img src={footer} alt="footer" className="footer-mobile-bg-img" />
                    <div className="content">
                        <p className="footer-title fw-bold text-white">Subscribe for news<br />and special offers!</p>
                        <div className="input-group custom-subscribe-group">
                            <input type="email" className="form-control" placeholder="Your email address" aria-label="Your email address" 
                                />
                            <button className="btn fw-bold" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <div className="brand-container">
                        <h5 className="footer-brand fs-3 fw-bold fst-italic">Craftsman</h5>
                        <p className="small text-white-50 desktop-copyright">© 2020. All Rights Reserved.</p>
                    </div>
                    <ul className="footer-list">
                        <li className="list-item"><a href="#" className="list-link text-decoration-none">Purchase Policy</a></li>
                        <li className="list-item"><a href="#" className="list-link text-decoration-none">Privacy Policy</a></li>
                        <li className="list-item"><a href="#" className="list-link text-decoration-none">Terms & Conditions</a></li>
                    </ul>
                    <p className="small text-white-50 mobile-copyright">© 2020. All Rights Reserved.</p>
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