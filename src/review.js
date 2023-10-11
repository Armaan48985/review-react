import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


function Review() {

    const [index, setIndex]  = useState(0);
    const {image, name, job, text} = people[index];

    const check = (number) => {
        if(number > people.length-1){
            return 0;
        }
        if(number < 0){
            return people.length-1;
        }
        else{
            return number;
        }
    }

    const prev = () => {
        setIndex(check(index-1))
    }
    const next = () => {
        setIndex(check(index+1))
    }
    const random = () => {
        let randomNumber = Math.floor(Math.random()*people.length)
        setIndex(randomNumber)
        console.log(randomNumber)
    }


  return (
    <article className='review'>
        <div className='img-container'>
            <img src={image} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='button-container'>
            <button className='prev-btn' onClick={prev}>
                <FaChevronLeft/>
            </button>
            <button className='next-btn' onClick={next}>
                <FaChevronRight/>
            </button>
        </div>

        <button className='random-btn' onClick={random}>
            Surprise Me
        </button>
    </article>
)}
export default Review