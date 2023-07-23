// Write your JS code here
import './index.css'

const Header = () => (
  <div>
    <div className="sm-header">
      <div className="top-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="header-logo-sm-img"
          alt="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="icon-img"
          alt="nav logout"
        />
      </div>
      <div className="icon-background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="icon-img"
          alt="nav home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          className="icon-img"
          alt="nav products"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="icon-img"
          alt="nav cart"
        />
      </div>
    </div>
    <div className="bg-header-container">
      <div className="bg-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="header-logo-bg-img"
          alt="website-logo"
        />
        <div className="header-content">
          <p className="header-options">Home</p>
          <p className="header-options">Products</p>
          <p className="header-options">Cart</p>
          <button className="logout-button" type="button">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Header
