import React from 'react';
import Card from '../../components/card/Card';

import './trainers.css';

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card classname='trainer'>
        <div className='trainer__img'>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className='trainer__socials'>
            {
                socials.map(({icon, link}, index) => {
                    return <a 
                    key={index} 
                    href={link} 
                    target='_blank'
                    rel='noreferrer noopener'>
                        {icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Trainer;