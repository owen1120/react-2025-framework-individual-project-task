import { useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import CartOffcanvas from './CartOffcanvas';
import footer from '../assets/footer.jpg';

function Layout({ children, cart, removeFromCart, updateCartQty }) {
  const [showCart, setShowCart] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeButtonRef = useRef(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('訂閱成功！(模擬)');
  };

  // 開啟購物車的函式
  const handleShowCart = () => setShowCart(true);

  const handleMobileLinkClick = () => {
    setIsDropdownOpen(false);
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  }

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* --- Header 區域 --- */}
      <nav 
        className={`header navbar navbar-expand-lg position-absolute w-100 top-0 z-3 
          ${isHomePage 
            ? 'navbar-light' 
            : 'navbar-light navbar-white-theme'
          }`
        }
      >
        <div className="container">
          
          {/* 購物車按鈕 (Mobile) */}
          <button className="btn mobile-cart position-relative" onClick={handleShowCart}>
            <span className="material-symbols-outlined icon-fill">shopping_cart</span>
            {totalQty > 0 && (
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                 {totalQty}
               </span>
            )}
          </button>

          <Link className="navbar-brand fw-bold fs-3 fst-italic mx-0" to="/">
            Craftsman
          </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Menu Offcanvas (左側選單) */}
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header">
              <button type="button" className="btn btn-return" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasNavbar" aria-label="Close" ref={closeButtonRef}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              
              {/* 購物車按鈕 (Inside Menu Offcanvas) */}
              <button className="btn mobile-cart position-relative" onClick={handleShowCart}>
                <span className="material-symbols-outlined icon-fill">shopping_cart</span>
                {totalQty > 0 && (
                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                     {totalQty}
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
                    style={{ display: isDropdownOpen ? 'flex' : 'none' }}
                  >
                    <li><Link to="/products?category=All" className="dropdown-item" onClick={handleMobileLinkClick}>All<small className='qty'>24</small></Link></li>
                    <li><Link to="/products?category=Bowl" className="dropdown-item" onClick={handleMobileLinkClick}>Bowl<small className='qty'>10</small></Link></li>
                    <li><Link to="/products?category=Cup" className="dropdown-item" onClick={handleMobileLinkClick}>Cup<small className='qty'>8</small></Link></li>
                    <li><Link to="/products?category=Plate" className="dropdown-item" onClick={handleMobileLinkClick}>Plate<small className='qty'>3</small></Link></li>
                    <li><Link to="/products?category=Vase" className="dropdown-item" onClick={handleMobileLinkClick}>Vase<small className='qty'>3</small></Link></li>
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
                  {/* 購物車按鈕 (Desktop) */}
                  <button className="btn position-relative" onClick={handleShowCart}>
                    <span className="material-symbols-outlined icon-fill">shopping_cart</span>
                    {totalQty > 0 && (
                       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.6rem'}}>
                         {totalQty}
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

      <CartOffcanvas
        show={showCart} 
        handleClose={() => setShowCart(false)} 
        cart={cart}
        removeFromCart={removeFromCart}
        updateCartQty={updateCartQty}
      />
    </div>
  );
}

export default Layout;