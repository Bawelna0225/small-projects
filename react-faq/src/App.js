import React, { useState } from 'react';
import FAQ from './FAQ';

function App () {
  const [faqs, setfaqs] = useState([
    {
      question: 'How to make FAQ in React?',
      answer: 'This Way',
      open: true
    },
    {
      question: 'Why did I make this simple project?',
      answer: 'To make daily push to git',
      open: false
    },
    {
      question: 'What Questions Should be in FAQ?',
      answer: 'No Idea.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <div className="bg-text">FAQ</div>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;