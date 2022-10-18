import { useState } from 'react';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { FeedBackOptions } from './Feedback/FeedBackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { NotificationMessage } from './NotificationMessage/NotificationMessage.jsx';

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stateKey = ['good', 'neutral', 'bad'];
  
  const totalFeedback = good + neutral + bad;
  
  const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
  
  const handleIncrement = (btnName) => {
    switch (btnName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
        case 'bad':
          setBad(prevState => prevState + 1);
          break;
          case 'neutral':
            setNeutral(prevState => prevState + 1);
            break;
            default:
              break;
            }
          };
          
  const stateValue = { good, neutral, bad, totalFeedback, positiveFeedbackPercentage };
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={stateKey}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics props={stateValue} />
          ) : (
            <NotificationMessage />
          )}
        </Section>
      </>
    );
  }
