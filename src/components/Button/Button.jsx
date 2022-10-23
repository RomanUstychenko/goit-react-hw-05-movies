import scss from "./Button.module.scss"
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button 
    className={scss.ButtonLoadMore}
    type="button" 
    onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export function SubmitBnt ({text, onClick}) {
  return (
    <button 
    onClick={onClick}
    type="submit" 
    className={scss.SearchFormButton}>
      <span className={scss.SearchFormButtonLabel}>{text}</span>
    </button>
  ) 
}

SubmitBnt.propTypes = {
  onClick: PropTypes.func.isRequired,
  // text: PropTypes.string.isRequired,
};