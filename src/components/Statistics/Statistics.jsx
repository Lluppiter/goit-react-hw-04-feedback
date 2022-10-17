import styles from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  props: { good, neutral, bad, total, percentage },
}) => {
  return (
    <>
      <ul className={styles.statisticsList}>
        <li className={styles.text}>Good: {good}</li>
        <li className={styles.text}>Neutral: {neutral}</li>
        <li className={styles.text}>Bad: {bad}</li>
        <li className={styles.text}>Total: {total}</li>
        <li className={styles.text}>Positive feedback: {percentage}&#37;</li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
