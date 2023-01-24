import { Label} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const onWrite = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
<TextField
        margin="normal"
        fullWidth
        id="name"
        label="Username"
        name="name"
        autoFocus
        onChange={onWrite}
        placeholder="Search"
      />

    // <Label>
    //   Find contacts by name
    //   <FindInput
    //    type="text"
    //    name="filter" 
    //    onChange={onWrite} />
    // </Label>
  );
};

Label.propTypes = {
  filter: PropTypes.string,
};