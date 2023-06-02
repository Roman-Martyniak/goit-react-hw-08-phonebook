import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "shared/useAuth";

export default function PrivateRoute() {
  const isLogin = useAuth();

  return (
    <>
      {isLogin ? <Outlet /> : <Navigate to={"/login"} />}
    </>
  )
}