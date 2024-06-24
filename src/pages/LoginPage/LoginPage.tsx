import { useState } from "react";
import styles from "./LoginPage.module.css";
import "./LoginPage.module.css";
import "bulma/css/bulma.min.css";
import {
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  loginWithGoogle,
} from "../../firebase/firebase";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import * as userActions from '../../features/user';

export type Cridentials = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch: any = useAppDispatch();

  const [cridentials, setCridentials] = useState<Cridentials>({
    email: "",
    password: "",
  });

  const [loader, setLoader] = useState(false);

  function onChangeHandler(data: string, field: string) {
    setCridentials((prevState) => {
      return {
        ...prevState,
        [field]: data,
      };
    });
  }

  async function handleRegistration() {
    const user: any = await registerWithEmailAndPassword(
      cridentials.email,
      cridentials.password
    );
    if (user === 1) {
      setError(true);
    }
  }

  async function handleLogin2() {  
    setLoader(true)
    const myUser: any = await logInWithEmailAndPassword(
      cridentials.email,
      cridentials.password
    );
    console.log(myUser, 'myUser');
    
    if (myUser.user) {
      dispatch(userActions.setAuthed(true));
      localStorage.setItem('isAuthed', 'true');
      navigate("/profile");
    }

    setLoader(false)
  }

  async function handleGoogleLogin() {
    const myUser: any = await loginWithGoogle();

    if (myUser.user) {
      navigate("/profile");
    }
  }

  return (
    <div className="box is-small ml-6 mr-6">
      {loader && (
        <div>IT IS A LOADER BIIIIG</div>
      )}
      <div className={`${styles.leftSide} ${styles.text}`}>
        <div className={styles.text}>Register or login &#128515; </div>
        <div className={styles.text}>Email:</div>

        <input
          value={cridentials.email}
          type="email"
          className="input"
          onChange={(event) =>
            onChangeHandler(event.currentTarget.value, "email")
          }
        />

        <div>Password:</div>

        <input
          type="password"
          className="input"
          onChange={(event) =>
            onChangeHandler(event.currentTarget.value, "password")
          }
        />

        <div className={styles.mb1}></div>
        <div className={styles.buttonsBox}>
          <div
            className="button has-background-primary-light has-text-dark"
            onClick={handleLogin2}
          >
            Login
          </div>
          <div
            className="button has-background-primary-light has-text-dark"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </div>
          <div
            className="button has-background-primary-light has-text-dark"
            onClick={handleRegistration}
          >
            Register
          </div>
          {error && <div>Something went wrong</div>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
