import React from 'react';
import SectionHead from '../SectionHead/SectionHead';
import {FaRegQuestionCircle} from 'react-icons/fa';
import {faqs} from '../../data.js';
import FAQ from './FAQ';
// import { ref, get } from "firebase/database";
// import { database } from "../../firebase";

// const faqs = ref(database, "faqs");

//     get(faqs).then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log({ faqs: snapshot.val() });
//         }
//     });

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className='container faqs__container'>
            <SectionHead icon={<FaRegQuestionCircle/>} title="FAQs" className="faqs__head"/>
            <div className='faqs__wrapper'>
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} 
                        question={question}
                        answer={answer}/>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs;