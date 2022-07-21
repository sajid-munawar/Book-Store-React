import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const statusMsg = useSelector((state) => state.status);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
      <h2>{statusMsg}</h2>
    </div>
  );
}

export default Categories;
