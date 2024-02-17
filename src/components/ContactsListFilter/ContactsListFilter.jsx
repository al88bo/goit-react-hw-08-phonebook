import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const ContactsListFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="keyword"
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
        autoComplete="off"
      />
    </div>
  );
};
