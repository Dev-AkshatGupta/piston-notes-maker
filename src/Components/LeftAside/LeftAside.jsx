import React from "react";
import styles from "./LeftAside.module.css";
import { Link, NavLink} from "react-router-dom";
import { GiHomeGarage } from "react-icons/gi";
import {  HiLogout } from "react-icons/hi";
import { AiOutlineInbox } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./../../Redux/Reducers-Redux/authSlice";
import { displayModal } from "Redux/Reducers-Redux/notesSlice";
function LeftAside() {
  const currentUser = useSelector((state) => state?.auth?.currentUser);
  const dispatch = useDispatch();
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
                    to="/archive"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <AiOutlineInbox />
                    </span>
                    <span className={` ${styles.navigation_text}`}>
                      Archive
                    </span>
                  </NavLink>
                  <NavLink
                    to="/trash"
                    className={({ isActive }) =>
                      isActive ? `${styles.active_link}` : null
                    }
                  >
                    <span className={`${styles.navigation_svg} `}>
                      <ImBin />
                    </span>
                    <span className={` ${styles.navigation_text}`}>Trash</span>
                  </NavLink>

                  <button
                    className="btn btn-outline-pri mx-1 ml-7 my-1 px-2 py-1 text-2 btn-sec rounded-xl "
                    onClick={() => dispatch(displayModal())}
                  >
                    Add Note
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
