import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title, Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>

      <Filter />
      <ContactList />
    </Wrapper>
  );
};
