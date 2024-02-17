import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThreeDots } from 'react-loader-spinner';
import { toast, Flip } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

import {
  SectionWrapper,
  ContactsForm,
  ContactsList,
  ContactsListFilter,
} from 'components';

import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (error) toast.error(error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionWrapper title="Phonebook">
      <ContactsForm />
      <h2>Contacts</h2>
      <ContactsListFilter />
      <ContactsList />
      {isLoading && (
        <ThreeDots
          height="85"
          width="85"
          color="#303f9f"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        />
      )}
      <ToastContainer
        transition={Flip}
        position="top-right"
        autoClose={1500}
        theme="light"
        className={css.toast}
      />
    </SectionWrapper>
  );
};
