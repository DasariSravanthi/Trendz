// Write your JS code here
import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-content-background">
      <div className="home-content-card">
        <div className="home-content">
          <h1 className="heading">Clothes that get YOU noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            className="clothes-sm-img"
            alt="clothes that get you noticed"
          />
          <p className="paragraph">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in our own way.
          </p>
          <button className="shop-button" type="button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="clothes-bg-img"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
