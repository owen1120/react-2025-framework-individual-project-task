import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartModal from './CartModal';

import footer from '../assets/footer.jpg';

function Layout({ children, cart, removeFromCart }) {
  const [showModal, setShowModal] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('訂閱成功！(模擬)');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* --- Header 區域 --- */}
      <nav className="header navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          
          {/* 購物車按鈕 (Mobile) */}
          <button className="btn mobile-cart position-relative" onClick={() => setShowModal(true)}>
            <span className="material-symbols-outlined">shopping_cart</span>
            {cart?.length > 0 && (
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                 {cart.length}
               </span>
            )}
          </button>

          <Link className="navbar-brand fw-bold fs-3 fst-italic mx-0" to="/">
            Craftsman
          </Link>
          
          {/* 漢堡選單按鈕 */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Offcanvas */}
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header">
              {/* 返回按鈕 */}
              <button type="button" className="btn btn-return" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar" aria-label="Close">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              
              {/* 購物車按鈕 (Inside Offcanvas) */}
              <button className="btn mobile-cart position-relative" onClick={() => setShowModal(true)}>
                <span className="material-symbols-outlined">shopping_cart</span>
                {cart?.length > 0 && (
                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                     {cart.length}
                   </span>
                )}
              </button>
            </div>
            
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-lg-0 align-items-center">
                <li className="nav-item desktop-navlink">
                  <NavLink className="nav-link" to="/products">Product</NavLink>
                </li>
                
                <li className="nav-item dropdown mobile-navlink">
                  <div 
                    className={`nav-link dropdown-toggle custom-dropdown-toggle ${isDropdownOpen ? 'show' : ''}`} 
                    role="button" 
                    onClick={toggleDropdown} 
                    aria-expanded={isDropdownOpen} 
                    style={{ cursor: 'pointer' }}
                  >
                    Product
                  </div>
                  
                  <ul 
                    className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} 
                    data-bs-popper="none"
                    style={{ display: isDropdownOpen ? 'block' : 'none' }}
                  >
                    <li><a href="#" className="dropdown-item">All<small className='qty'>24</small></a></li>
                    <li><a href="#" className="dropdown-item">Bowl<small className='qty'>10</small></a></li>
                    <li><a href="#" className="dropdown-item">Cup<small className='qty'>8</small></a></li>
                    <li><a href="#" className="dropdown-item">Plate<small className='qty'>3</small></a></li>
                    <li><a href="#" className="dropdown-item">Vase<small className='qty'>3</small></a></li>
                  </ul>
                </li>

                <li className='divider'></li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li className='divider'></li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className='divider'></li>
                <li className="nav-item desktop-cart ms-lg-3">
                  <button className="btn position-relative" onClick={() => setShowModal(true)}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {cart?.length > 0 && (
                       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                         {cart.length}
                       </span>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main 內容區域 --- */}
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
              
              <form className="input-group custom-subscribe-group" onSubmit={handleSubscribe}>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email address" 
                    aria-label="Your email address" 
                    required
                />
                <button className="btn fw-bold" type="submit">
                  Subscribe
                </button>
              </form>

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