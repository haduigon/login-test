import { useNavigate } from "react-router";

export const ProtectedRoute = (children : React.ReactNode) => {
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('user') as string)

  if (userInfo === null || !userInfo.isAuth) {
    navigate('/');
  }
}