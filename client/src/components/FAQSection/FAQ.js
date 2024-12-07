import React, { forwardRef } from 'react'
import { question } from './FAQApi'
import "./FAQ.css";
import { useState } from 'react';
import FAQAnswer from './FAQAnswer';

const FAQ = forwardRef((props,ref) => {
  const [data,setData]=useState(question);


  return (
    <>
    <div ref={ref} className="outer-div">
    <section className='main-div'>
      <h1>FAQ on the CertiGen Certificate Maker</h1>
      {
        data.map((currentElemnt)=>{
          return <FAQAnswer
          key={currentElemnt.id}
          {...currentElemnt}/>;
        })
      }
      </section>
      </div>
    </>
  )
})

export default FAQ
