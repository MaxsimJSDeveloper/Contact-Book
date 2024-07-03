import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const id = useId();

  return (
    <form className={css.searchBoxContainer}>
      <label htmlFor={`${id}-s`}>Find your contacts</label>
      <input
        type="text"
        value={filter.name}
        onChange={handleChangeInput}
        className={css.searchBoxInput}
        id={`${id}-s`}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBox;
