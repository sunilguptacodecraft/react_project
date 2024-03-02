import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/auth-slice';
import logo from "../../assets/images/logo-dark.png";
import iconBar from "../../assets/images/icons/icon-bar.png";
import footer from "../../assets/images/footer-1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const {isAuthenticated, user} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  return (
    <>
      <header className="main-header header-style-one">
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="nav-outer">
                <div className="mobile-nav-toggler">
                  <img src={iconBar} alt="" />
                </div>

                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation">
                      <li>
                        <Link to="/">About</Link>{" "}
                      </li>
                      <li className="dropdown">
                        <Link to="/">Products</Link>
                        <ul>
                          <li>
                            <Link to="/">New Data Alerts</Link>
                          </li>
                          <li>
                            <Link to="/search-initiate">Data Search</Link>
                          </li>
                          <li>
                            <Link to="/">Charges</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/">What we do</Link>
                      </li>

                      {isAuthenticated && (
                        <>
                          <li className="dropdown">
                            <Link >My Document</Link>
                            <ul>
                              <li>
                                <Link to="/favorites">Favorites</Link>
                              </li>
                              <li>
                                <Link to="/saved-searches">Saved Searches</Link>
                              </li>
                              <li>
                                <Link to="/purchased-data">
                                  Data Purchased
                                </Link>
                              </li>
                              <li>
                                <Link to="/">My Alert</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/cart">My Cart</Link>
                          </li>
                          {/* {user.roleId === 1 && 
                          <li className="dropdown">
                            <Link to="/">Admin Menu</Link>
                            <ul>
                              <li>
                                <Link to="/user-management">User Management</Link>
                              </li>
                              <li>
                                <Link to="/admin/add-profile">Add Profile Data</Link>
                              </li>
                              <li>
                                <Link to="">Upload Profile Data</Link>
                              </li>
                              <li>
                                
                              </li>
                            </ul>
                          </li>} */}

                          <li className="dropdown">
                            <Link to="/">My Account</Link>
                            <ul>
                              <li>
                                <Link to="/update-profile">View Profile</Link>
                              </li>
                              <li>
                                <Link to="/change-password">Change Password</Link>
                              </li>
                              <li>
                                <Link to="/order-history">My Order</Link>
                              </li>
                              <li>
                                <Link onClick={()=> {
                                  dispatch(setAuth({ isAuthenticated: false, user: null }));
                                  navigate('/login')
                                  setTimeout(() => {
                                    localStorage.removeItem('persist:root');
                                    localStorage.clear()      
                                  }, 1000);   
                                  }}>Signout</Link>
                              </li>
                            </ul>
                          </li>
                          {user.roleId === 1 && 
                          <li className="dropdown">
                            <Link to="/">Admin</Link>
                            <ul>
                              <li>
                                <Link to="/user-management">User Management</Link>
                              </li>
                              <li>
                                <Link to="/admin/add-profile">Add Profile Data</Link>
                              </li>
                              <li>
                                <Link to="">Upload Profile Data</Link>
                              </li>
                              <li>
                                
                              </li>
                            </ul>
                          </li>}
                        </>
                      )}

                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="right-column">
                <div className="attr-nav">
                  <div className="call">
                    <div className="icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="info">
                      <span>Have any question?</span>
                      <h5>18697639732</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="nav-outer">
                  <div className="mobile-nav-toggler">
                    <img src={iconBar} alt="" />
                  </div>

                  <nav className="main-menu navbar-expand-md navbar-light"></nav>
                </div>
                <div className="right-column">
                  <div className="navbar-right">
                    <div className="link-btn">
                      <div className="attr-nav">
                        <div className="call">
                          <div className="icon">
                            <i className="fas fa-phone"></i>
                          </div>
                          <div className="info">
                            <span>Have any question?</span>
                            <h5>18697639732</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <i className="icon far fa-times"></i>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src={footer} alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer"></div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <Link to="/">
                    <span className="fab fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-facebook-square"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-pinterest-p"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-instagram"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-youtube"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
