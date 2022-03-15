import React from 'react';




function Card(props){
    return(
        <>
            <div className="cards main-container">
                <div className="card container">
                    <img src={props.imgsrc} alt="myImg" />
                    <div className='card_info'>
                        <span className='card_category'>{props.title}</span>
                        <h3 className='card_title'>{props.name}</h3>
                        <a href={props.link} target='_blank'><button id='btn'>Watch Now</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;