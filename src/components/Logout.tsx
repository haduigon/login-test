import { logout } from "../firebase/firebase";
import { useNavigate } from "react-router";
import styles from "./Logout.module.css";
import { useAppDispatch } from "../app/hooks";
import * as userAction from '../features/user';

type Props = {
  setShowLogout: (data: boolean) => void;
};

const Logout: React.FC<Props> = ({ setShowLogout }) => {
  const navigate = useNavigate();
  const dispatch: any = useAppDispatch();

  function logoutClickHandler(dta: boolean) {
    setShowLogout(dta);
    logout();
    dispatch(userAction.setAuthed(false));
    navigate("/");
  }
  return (
    <div className={`${styles.container} box`}>
      Confirm logout
      <div onClick={() => logoutClickHandler(false)}>Logout</div>
      <div onClick={() => setShowLogout(false)}>I`ve changed my mind</div>
    </div>
  );
};

export default Logout;
