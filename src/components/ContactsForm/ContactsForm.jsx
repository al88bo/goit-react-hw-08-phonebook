import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from '../../redux/operations';
import { selectContactsInfo } from '../../redux/selectors';
import css from './ContactsForm.module.css';

export const ContactsForm = () => {
  const contactsInfo = useSelector(selectContactsInfo);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;
    const hasDuplicate = contactsInfo.items.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (hasDuplicate) return toast.info(`${name} is already in contacts.`);
    dispatch(addContact({ name, phone }));
    e.currentTarget.reset();
  };

  return (
    <form className={css['contacts-form']} onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input
        type="text"
        name="name"
        id="contact-name"
        autoComplete="name"
        required
      />
      <label htmlFor="contact-number">Number</label>
      <input
        type="tel"
        name="number"
        id="contact-number"
        autoComplete="tel"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
