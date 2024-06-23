import { useNavigate } from "react-router";

type Props = {
  user: any,
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<Props> = ({children, user}) => {
  const navigate = useNavigate()
  const userInfo = JSON.parse(localStorage.getItem('user') as string)
  if (!user) {
    navigate('/');
  } 

  if (userInfo === null || !userInfo.isAuth) {
    navigate('/');
  }
  else {
    return <>
      {children}
    </>
  }

  return null;
}