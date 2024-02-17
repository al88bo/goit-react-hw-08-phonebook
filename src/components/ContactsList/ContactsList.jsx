import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { selectVisibleItems } from '../../redux/selectors';
import css from './Contact.module.css';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleItems);
  return (
    <ul className={css['contacts-list']}>
      {visibleContacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};
