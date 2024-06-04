import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { get } from "http";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { auth } from "../../firebase/firebase";
// import { authorizeUser } from "../../features/user";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import * as userActions from "../../features/user";
import { getUserData } from "../../firebase/firebase";

const Profile = () => {
  // const user: any = {};
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate()
  useEffect(() => {
    // console.log(user, "user effect profile");
    onAuthStateChanged(getAuth(), (user) => {
      console.log(user, 'authchangeuser');
      if (user === null) {
        navigate('/')
      } if (user) {
        setUser(user)
      }
    })

      
 
  }, []);
  const { currentUser } = getAuth();
  console.log(currentUser);
  
  // const dispatch: any = useAppDispatch();
  const newsData: any = useAppSelector((state) => state.user.isAuthed);
  const authorized = Boolean(localStorage.getItem("isAuthed"));
  // console.log(newsData, authorized);

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // console.log(user, "one more user");
    // if (authorized) {
    //   setTimeout(() => {
    //     setLoader(true);
    //   }, 900);
    // } 
    
  }, [user]);

  
  if (user === null) {
    return <Navigate to="/" />;
  }
 

  return (
    <div className="box">
     <div style={{ textAlign: "center" }}>Hello, {user.email}</div>
    </div>
  );
};

export default Profile;
