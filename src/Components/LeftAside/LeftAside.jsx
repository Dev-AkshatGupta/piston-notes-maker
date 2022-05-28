import React from "react";
import styles from "./LeftAside.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";
import { HiHashtag, HiLogout } from "react-icons/hi";
import { BsGear } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { logOut } from "./../../Redux/Reducers-Redux/authSlice";
import {displayModal} from "Redux/Reducers-Redux/notesSlice";
function LeftAside() {
  const currentUser = useSelector((state) => state?.auth?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <aside className={`${styles.banner} `}>
      <div className={styles.bannerSmall}>
        <div className={styles.main}>
          <div className={`${styles.main_banner} px-3`}>
            <div className={styles.banner_upper}>
              <div className={`${styles.logo_container} py-0.5`}>
                <h1>
                  <Link to="/">
                    <img
                      src={require("./../../Assets/Images/FooterImage.png")}
                      alt="logo"
                    />
                  </Link>
                </h1>
              </div>

              <div className={`${styles.navigation} mt-2 mb-1 `}>
                <nav>
                  <NavLink
                    to="/homePage"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <GiHomeGarage />
                    </span>
                    <span className={` ${styles.navigation_text}`}> Home</span>
                  </NavLink>
                  <NavLink
                    to="/bookMarkPage"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <i className="fal fa-bookmark mr-2"></i>
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      BookMark
                    </span>
                  </NavLink>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <HiHashtag />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Explore
                    </span>
                  </NavLink>

                  <NavLink
                    to={`/profilePage/${currentUser?.id}`}
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <CgProfile />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Profile
                    </span>
                  </NavLink>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <BsGear />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Settings
                    </span>
                  </NavLink>
                  <button
                    className="btn"
                    onClick={() => dispatch(displayModal())}
                  >
                    <span className={` ${styles.navigation_text}`}>
                      Add Note
                    </span>
                  </button>
                </nav>
              </div>
            </div>
            <div className={`${styles.banner_bottom} my-3`}>
              <div className={`${styles.bottom_profile}`}>
                <div className={`${styles.profile}`}>
                  <p>{currentUser?.username}</p>
                  <span
                    onClick={() => {
                      window.location.reload(false);
                      dispatch(logOut());
                    }}
                    className="text-3xl"
                  >
                    <HiLogout />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export { LeftAside };
