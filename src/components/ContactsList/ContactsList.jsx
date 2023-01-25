import { List, ContactItem} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsFiltered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const dispatch = useDispatch();

  return (
    <List>
      {contactsFiltered.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Typography component="p" variant="h6">
            {name}: {number}
          </Typography>

          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};


List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};