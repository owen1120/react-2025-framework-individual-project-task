import { Link } from "react-router-dom";

import heroBanner from "../assets/index-1.jpg";
import feature1 from "../assets/index-2.jpg";
import feature2 from "../assets/index-3.jpg";
import feature3 from "../assets/index-4.jpg";
import director from "../assets/index-5.jpg";

function HomePage() {
  return (
    <div className="homepage">
      {/* banner區域 */}
      <section className="heroBanner">
        <div className="heroBanner-box">
          <img src={heroBanner} alt="Hero-Banner" className="heroBanner-img" />
        </div>
        <div className="content">
          <div className="text-content">
            <h1 className="title">Enjoy Your<br />Minimalist Lifestyle.</h1>
            <h2 className="subtitle">The best crafts in Taiwan. Get your free<br />shipping on tje first order.</h2>
          </div>
          <button className="btn" type="button">Shop now</button>
        </div>
      </section>

      <section className="features container">
        <ul className="cards-group">
          <li className="card card-1">
            <div className="card-imgs">
              <img src={feature1} alt="Special Clays" className="card-img" />
            </div>
            <div className="card-content">
              <div className="text-content">
                <h3 className="card-title">Special Clays</h3>
                <p className="card-desc">A general body formulation for contemporary earthenware is 25% kaolin, 25% ball clay, 35% quartz and 15% feldspar.</p>
                <a href="#" className="more">Learn More</a>
              </div>
            </div>
          </li>
          <li className="card card-2">
            <div className="card-imgs">
              <img src={feature2} alt="Less is more" className="card-img" />
            </div>
            <div className="card-content">
              <div className="text-content">
                <h3 className="card-title">Less is more</h3>
                <p className="card-desc">Trimming pottery can transform a weighty Earth-bound pot into one that is a pleasure to hold, look at, and use.</p>
                <a href="#" className="more">Learn More</a>
              </div>
            </div>
          </li>
          <li className="card card-3">
            <div className="card-imgs">
              <img src={feature3} alt="Marvelous Detail" className="card-img" />
            </div>
            <div className="card-content">
              <div className="text-content">
                <h3 className="card-title">Marvelous Detail</h3>
                <p className="card-desc">In Craftsman, the art director, working with marketers, develops or creates an idea of a new creation.</p>
                <a href="#" className="more">Learn More</a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section className="director">
        <img src={director} alt="director" className="director-img" />
        <div className="container">
          <h3 className="title">“I want to make the life more simple by crafts.”</h3>
          <div className="content">
            <p className="job">Art Director</p>
            <h4 className="name">hsiao-Ming Chen</h4>
            <ul className="community">
              <li><a href="#" className="community-item">Instagram</a></li>
              <li><a href="#" className="community-item">Twitter</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="products container">
        <ul className="cards-group">
          <li className="cards">
            <a href="#" className="card-item">
              <div className="card-imgs">
                <img src="https://github.com/hexschool/webLayoutTraining1st/blob/master/week6/img-1.jpg?raw=true" alt="Tatami Cup" className="card-img" />
                <span className="tag">On Sale</span>
              </div>
              <div className="card-content">
                <h4 className="name">Tatami Cup</h4>
                <div className="prices">
                  <p className="price">NT$1080</p>
                  <p className="originPrice">NT$1200</p>
                </div>
              </div>
            </a>
          </li>
          <li className="cards">
            <a href="#" className="card-item">
              <div className="card-imgs">
                <img src="https://github.com/hexschool/webLayoutTraining1st/blob/master/week6/img-1.jpg?raw=true" alt="Tatami Cup" className="card-img" />
                <span className="tag">On Sale</span>
              </div>
              <div className="card-content">
                <h4 className="name">Tatami Cup</h4>
                <div className="prices">
                  <p className="price">NT$1080</p>
                  <p className="originPrice">NT$1200</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}

export default HomePage;