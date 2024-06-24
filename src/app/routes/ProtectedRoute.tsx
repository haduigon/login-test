import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  useState,
} from "react";
import { Navigate } from "react-router";

type Props = {
  children: any
}

const ProtectedRoute: React.FC<Props> = ( {children} ) => {
  const [user, setUser] = useState<any>(undefined);
  const listen = onAuthStateChanged(getAuth(), (user2) => {
    if (!user) {
      setUser(null);
    }
    if (user2) {
      setUser(user2);
    }

    return () => {
      listen();
    }
  });

  return (
    <div className="box">
      {user === undefined && <div style={{textAlign: 'center'}}>LOOOOAAAADEEEERRR</div>}
      {user === null && <Navigate to="/" />}
      {user && <>{children}</>}
    </div>
  );
};

export default ProtectedRoute;