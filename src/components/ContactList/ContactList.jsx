import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactItemStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const allContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItemStyle key={id}>
          <ContactItem name={name} number={number} id={id} />
        </ContactItemStyle>
      ))}
    </ul>
  );
};
