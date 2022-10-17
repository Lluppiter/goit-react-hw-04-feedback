import styles from '../Feedback/FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.buttonBlock}>
        {options.map(option => {
          let feedbackButton;
          if (option !== 'total' && option !== 'percentage') {
            feedbackButton = (
              <button
                name={option}
                key={option}
                onClick={onLeaveFeedback}
                className={styles.button}
              >
                {option}
              </button>
            );
          }
          return feedbackButton;
        })}
      </div>
    </>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
