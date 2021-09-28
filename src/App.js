import React from 'react';

import FaqComponent from './FaqComponent';

import svgImage from './images/illustration-woman-online-mobile.svg';
import bgcPattern from './images/bg-pattern-mobile.svg';

import './App.scss';

const questionsAndAnswers = [
  {
    id: 1,
    question: 'How many team members can I invite?',
    answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },
  {
    id: 2,
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    id: 3,
    question: 'How do I reset my password?',
    answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    id: 4,
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
  },
  {
    id: 5,
    question: 'Do you provide additional support?',
    answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  },
]

const App = () => {

  const component = questionsAndAnswers.map(object => (
    <FaqComponent key={object.id} {...object} />
  ))

  return (
    <div className="App">
      <div className="faq-card-wrapper">
        <div className="image-wrapper">
          <img className="svg-image" src={svgImage} alt="" />
          <img className="bgc-pattern" src={bgcPattern} alt="" />
        </div>
        <div className="questions-and-answers">
          <span className="title">FAQ</span>
          {component}
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://github.com/szczepanieceryk">Eryk Szczepaniec</a>.
      </div>
    </div>
  );
}

export default App;
