import scss from "./Searchbar.module.scss"
import  { useState } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from "nanoid"
import { SubmitBnt } from 'components/Button/Button'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Searchbar({onSubmit}) {

const [inputSearch, setInputSearch] = useState('');

const searchID = nanoid();

const searchField = {
  label: "Search",
  type: "text",
  name: "inputSearch",
  placeholder: "Search Movies",
  required: true,
}
 const handleChange = (e) => {
const {value} = e.target;
setInputSearch(value)
  };

 const handleSubmit = (e) => {
    e.preventDefault()
    if (inputSearch.trim() === '') {
      return  Notify.failure('Please, enter name');
    }
    onSubmit(inputSearch);
    reset();
  };

 const reset = () => {
  setInputSearch('')
    };

  return (
    <header className={scss.Searchbar}>
<form 
className={scss.SearchForm}
onSubmit={handleSubmit}>
  <SubmitBnt 
  text="Search"
  onClick={handleSubmit} 
  />
  <input
    id={searchID}
    className={scss.SearchFormInput}
    value={inputSearch}
    onChange={handleChange}
    {...searchField}
    autocomplete="off"
    autofocus
  />
</form>
</header>
  )
};


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
