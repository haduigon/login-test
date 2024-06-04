import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import "./LoginPage.module.css";
import "bulma/css/bulma.min.css";
import {
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logInWithEmailAndPassword2,
  loginWithGoogle,
} from "../../firebase/firebase";
// import { getAuth, signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { getAuth } from "firebase/auth";
import { useAppDispatch } from "../../app/hooks";
// import { useAppSelector } from "../../app/hooks";
import * as userActions from '../../features/user';

export type Cridentials = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  // const user = getAuth().currentUser;
  const dispatch: any = useAppDispatch();

  const [cridentials, setCridentials] = useState<Cridentials>({
    email: "",
    password: "",
  });

  const [user, setUser] = useState<any>()
  useEffect(() => {
    setTimeout(() => {
      setUser(getAuth().currentUser)
    }, 500)
    console.log(user, 'user effect login');
    const au = getAuth()
    
  }, [user]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    console.log(user, 'one more user');
    setTimeout(() => {
      setLoader(true);
    }, 600)
  }, [user])
  console.log(user, 'user effect login');

//   useEffect(() => {
// }, [cridentials.email, cridentials.password])




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
    const myUser: any = await logInWithEmailAndPassword(
      cridentials.email,
      cridentials.password
    );
    // console.log(myUser, 'myUser');
    
    if (myUser.user) {
      dispatch(userActions.setAuthed(true));
      localStorage.setItem('isAuthed', 'true');
      navigate("/profile");
    }
  }
   function handleLogin3() {    
    logInWithEmailAndPassword2(cridentials.email, cridentials.password).then(res => console.log(res));

  
  }

  async function handleGoogleLogin() {
    const myUser: any = await loginWithGoogle();

    if (myUser.user) {
      navigate("/profile");
    }
  }

  return (
    <div className="box is-small ml-6 mr-6">
      {!loader && (
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
