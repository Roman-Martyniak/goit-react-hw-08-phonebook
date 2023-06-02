import style from './register.module.css'
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperation';
import { useState } from 'react';
import { selectIsLogin } from 'redux/auth/authSelector';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';



export default function RegisterForm() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onRegister({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isUserLogin) {
    return <Navigate to={'/contacts'} />;
  }

  return (
    <div className={style.boxs}>
      <form variant="standard" onSubmit={handleSubmit} autoComplete='on ' >

        <InputLabel>
          Username
        </InputLabel>
        <Input type="text"
          className={style.inputLog}
          name="name"
          value={name}
          placeholder="Enter user name"
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>} />


        <InputLabel >
          Email
        </InputLabel>
        <Input type="email"
          className={style.inputLog}
          name='email'
          value={email}
          onChange={handleChange}
          placeholder="Enter user email"
        />
        <InputLabel >
          Password
        </InputLabel>
        <Input type="password"
          className={style.inputLog}
          name='password'
          value={password}
          onChange={handleChange}
          placeholder="Enter user password"
        />

        <Button type='submit' variant="outlined">Register</Button>
      </form>

    </div>
  )
}