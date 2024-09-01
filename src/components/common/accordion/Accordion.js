import React, {useState} from "react";
import '../accordion/Accordion.css';


function Accordion() {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i){
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <div className="Accordion">
            <div className="wrapper">
                {faqData.map((item, i) =>(
                    <div key={i} className={`item ${selected === i ? 'active' : ''}`} onClick={()=>toggle(i)}>
                        <div className="title">
                            <h2>{item.question}</h2>
                            <span className="icon">{selected === i ? '-' : '+'}</span>
                        </div>
                        <div  className={selected === i ? 'content show' : 'content'}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion;


const faqData = [
    {
      question: "What is SmartQuiz?",
      answer: "SmartQuiz is an interactive platform offering a wide range of quizzes designed to challenge your knowledge and help you learn new things in a fun and engaging way."
    },
    {
      question: "How can I create an account on SmartQuiz?",
      answer: "Creating an account on SmartQuiz is easy. Simply click on the 'Sign Up' button, fill in your details, and you'll be ready to start quizzing in no time."
    },
    {
      question: "Is SmartQuiz free to use?",
      answer: "Yes, SmartQuiz offers free access to a vast collection of quizzes. We also offer premium content for users who want to take their learning to the next level."
    },
    {
      question: "Can I create my own quizzes on SmartQuiz?",
      answer: "Absolutely! SmartQuiz allows users to create and share their own quizzes. Simply log in, navigate to the 'Create Quiz' section, and start building your quiz."
    },
    {
      question: "What topics are covered in SmartQuiz?",
      answer: "SmartQuiz covers a wide range of topics including science, history, technology, entertainment, and much more. We regularly update our content to include the latest trends and topics."
    }
  ];
  