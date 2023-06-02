
import UserRoutes from "./UseRoustes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SelectIsLoadingUserStatus } from "redux/auth/authSelector";
import { current } from "redux/auth/authOperation";
function App() {

  const dispatch = useDispatch();
  const isLoadingUser = useSelector(SelectIsLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);


  return (<div
  >
    {isLoadingUser ? <p>Loading...</p> :
      <UserRoutes />}

  </div>)
}
export default App;
