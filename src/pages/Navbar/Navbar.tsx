import { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Logout from "../../components/Logout";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  
  return (
    <div className={styles.container}>
      <NavLink to='/' className={styles.title}>
        Home
      </NavLink>
      <NavLink to='/news' className={styles.title}>
        News
      </NavLink>
      <NavLink to='/profile' className={styles.title}>
        Profile
      </NavLink>
      <NavLink to='/profile2' className={styles.title}>
        Protected news
      </NavLink>

      <div className={styles.title} onClick={() =>setShowLogout(!showLogout)}>
        Logout
      </div>
      {showLogout && (
        <Logout setShowLogout={setShowLogout} />
      )}
    </div>
  );
};

export default Navbar;
