import styles from '../Feedback/FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <>
      <div className={styles.buttonBlock}>
        {options.map(option => {
          return (
              <button
                name={option}
                key={option}
                onClick={()=>onLeaveFeedback(option)}
                className={styles.button}
              >
                {option}
              </button>
            );
        })}
      </div>
    </>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
