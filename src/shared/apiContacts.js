

import instance from './apiAuth';

export const fetchContacts = async () => {
    const { data } = await instance.get('/contacts');
    return data;
  };
  
  export const addContact = async data => {
    const { data: result } = await instance.post('/contacts', data);
    return result;
  };
  
  export const removeContact = async contactid => {
    const { data } = await instance.delete(`/contacts/${contactid}`);
    return data;
  };