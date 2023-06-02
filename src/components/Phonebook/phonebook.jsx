
import { nanoid } from 'nanoid';
import style from 'components/Phonebook/phonebook.module.css'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/operation/operation';
import { useMemo } from "react";
import { fetchContacts } from 'redux/operation/operation';
import { useEffect } from 'react';
import { useAuth } from 'shared/useAuth';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

function Phonebook() {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const dispatch = useDispatch();

  const isLogin = useAuth();


  const nameId = useMemo(() => nanoid(), []);
  const numberId = useMemo(() => nanoid(), []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  }

  const onAddContact = (contacts) => {
    const action = addContact(contacts);
    console.log("contact", contacts);

    dispatch(action);
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddContact({ name, number });
    setName("");
    setPhone("");
  }

  if (!isLogin) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className={style.box}>
      <h1>Phonebook</h1>

      <form onSubmit={handleSubmit}>
        <div className={style.label}>
          <InputLabel htmlFor="nameId">
            Name
          </InputLabel >
          <Input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            id={nameId}
            name="name"
            value={name}

            onChange={handleChange}
            className={style.input}
          />
        </div>

        <div>

          <InputLabel htmlFor="numberId">
            Number
          </InputLabel>
          <Input

            type="tel"
            name="number"
            id={numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}

            onChange={handleChange}
            className={style.input}
          />
        </div>

        <Button type="submit" variant="outlined" size="small" >Add contact</Button>
      </form>
    </div >
  )

}
export default Phonebook;