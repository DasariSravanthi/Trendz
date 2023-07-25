// Write your JS code here
import './index.css'

const Header = () => (
  <nav>
    <div className="sm-header">
      <div className="top-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="header-logo-sm-img"
          alt="website logo"
        />
        <button className="logout-icon-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="icon-img"
            alt="nav logout"
          />
        </button>
      </div>
      <ul className="icon-background-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="icon-img"
            alt="nav home"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="icon-img"
            alt="nav products"
          />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="icon-img"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
    <div className="bg-header-container">
      <div className="bg-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="header-logo-bg-img"
          alt="website logo"
        />
        <div className="header-content">
          <ul className="header-options-container">
            <li className="header-options">Home</li>
            <li className="header-options">Products</li>
            <li className="header-options">Cart</li>
          </ul>
          <button className="logout-button" type="button">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
