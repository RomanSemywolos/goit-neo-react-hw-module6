import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={style.wrap}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} className={style.mainInput}/>
    </div>
  );
};

export default SearchBox;
