import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our suggestions!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem
                    src='images/img-9.jpg'
                    text='Explore the beautiful Niagara Falls'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-5.jpg'
                    text='Get to know history Pyramids of Giza'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-3.jpg'
                    text='Enjoy in the view of Zhangye Danxia Geopark'
                    label='Adventure'
                    path='/services'
                    />
                    </ul>
                </div>

            </div>

    </div>
  )
}

export default Cards;