import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return(
    <div>
    {
        robots.map((box) =>{
        return( 
        <Card 
            key={box.id} 
            id={box.name} 
            name={box.name} 
            email={box.email}
        />
        );
        })
    }
    </div>
    );
}

export default CardList;