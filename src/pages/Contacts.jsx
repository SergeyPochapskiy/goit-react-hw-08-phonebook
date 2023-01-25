import { Section } from '../components/Section/Section';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Wrap } from '../components/App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { selectError, selectIsLoading, selectContacts, selectFilter } from '../redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';



export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <Wrap>
      <ContactForm />
      <Section >
        <Filter />
        {isLoading && !error && <b>Loading...</b>}
        {contacts.length > 0 && <ContactsList contacts={filter} />}
      </Section>
    </Wrap>
  );
}