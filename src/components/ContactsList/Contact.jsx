import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const handleClick = (e, id, dispatch) => {
  e.target.innerHTML = 'removing...';
  e.target.disabled = 'true';
  dispatch(deleteContact(id));
};

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {phone}
      <button type="button" onClick={e => handleClick(e, id, dispatch)}>
        Delete
      </button>
    </li>
  );
};
