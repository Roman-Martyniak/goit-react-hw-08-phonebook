
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelector";
import { logOut } from "redux/auth/authOperation";
import style from './navContacts/nav.module.css';
import Button from '@mui/material/Button';

export default function NavbarUser() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  }

  return (

    <div className={style.boxe}>
      <p className={style.text}>{`Welcome, ${name}`}</p>

      <Button className={style.btn} onClick={onLogout} variant="contained">Logout</Button>
    </div>



  )

}