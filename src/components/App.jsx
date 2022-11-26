import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title, Wrapper } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </Wrapper>
  );
};
