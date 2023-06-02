import style from 'components/Filter/filter.module.css'

import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { selectFilter } from "redux/selectors";
import { setFilter } from 'redux/filter/filter-slice';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


export function FilterContacts() {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  }

  return (
    <div className={style.box}>


      <p className={style.name}>  Find contacts by name </p>
      <InputLabel htmlFor="filterId">

      </InputLabel>
      <Input type="text"
        name="filter"
        value={filter}
        placeholder="Find contacts"
        onChange={handleChange}
        id={filterId} />

    </div>)
};

