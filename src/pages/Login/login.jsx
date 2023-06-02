
import css from './login.module.css'
import { logIn } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectIsLogin } from 'redux/auth/authSelector';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import Button from '@mui/material/Button'

export default function LoginForm() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
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

  const onLogin = data => {
    dispatch(logIn(data));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onLogin({ email, password });

    setEmail('');
    setPassword('');
  };


  if (isUserLogin) {
    return <Navigate to={'/contacts'} />;
  }


  return (

    <div className={css.boxs} >
      <form className={css.form} onSubmit={handleSubmit} autoComplete='off' >

        <InputLabel   >
          Email
        </InputLabel>
        <Input type="email"
          name='email'
          value={email}
          onChange={handleChange}
          className={css.inputLog}
          placeholder="Enter user email"
        />
        <InputLabel >
          Password
        </InputLabel>
        <Input type="password"
          className={css.inputLog}
          name='password'
          value={password}
          onChange={handleChange}
          placeholder="Enter user password "
        />


        <Button type='submit' variant="outlined">Login</Button>
      </form>

    </div>

  )
}