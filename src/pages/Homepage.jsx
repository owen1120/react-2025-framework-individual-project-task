// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* 左邊文字區 */}
        <div className="col-md-6">
          <h1 className="display-4 fw-bold text-primary">歡迎來到寶石獵人的店</h1>
          <p className="lead text-muted">
            這裡只有最頂級的修練道具。想要變強嗎？想要通過試驗嗎？
            挑選適合你的寶石，開發你的念能力吧！
          </p>
          <Link to="/products" className="btn btn-primary btn-lg px-4 me-2">
            開始逛逛
          </Link>
          <button className="btn btn-outline-secondary btn-lg px-4">
            了解更多
          </button>
        </div>
        
        {/* 右邊圖片區 */}
        <div className="col-md-6">
          {/* 這裡先用假圖，你可以換成你 assets 裡的照片 */}
          <img 
            src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop" 
            alt="Gemstones" 
            className="img-fluid rounded-3 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;