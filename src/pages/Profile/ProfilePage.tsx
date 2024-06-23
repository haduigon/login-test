import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  useState,
} from "react";
import { Navigate } from "react-router";

const Profile = () => {
  const [user, setUser] = useState<any>(undefined);
  onAuthStateChanged(getAuth(), (user2) => {
    if (!user) {
      setUser(null);
    }
    if (user2) {
      setUser(user2);
    }
  });

  return (
    <div className="box">
      {user === undefined && "LOOOOAAAADEEEERRR"}
      {user === null && <Navigate to="/" />}
      {user && <div style={{ textAlign: "center" }}>Hello, {user?.email}</div>}
    </div>
  );
};

export default Profile;
