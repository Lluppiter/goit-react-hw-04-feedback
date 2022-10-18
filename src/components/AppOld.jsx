import { Component } from 'react';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { FeedBackOptions } from './Feedback/FeedBackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { NotificationMessage } from './NotificationMessage/NotificationMessage.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        percentage: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  };
  handleIncrement = e => {
    this.setState(prevState => {
      const { name } = e.target;
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics props={this.state} />
          ) : (
            <NotificationMessage />
          )}
        </Section>
      </>
    );
  }
}
