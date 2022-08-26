import React, { useState } from 'react';
import "./coffee.css"

export default function Coffee() {
    const [count, changeCount] = useState(0);

    const onIncrease = () => {
        changeCount(count + 1);
    }

    const onDecrease = () => {
        if(count > 0) {
            changeCount(count - 1);
        }
    }

    return (
        <>
            <div className="CoffeeMenu">
                <div className="CoffeeBox">
                    <img className="CoffeeImage" src="/assets/americano.jpeg" alt=""/>
                    <h5>아메리카노</h5>
                    <button className='plusButton' onClick={onDecrease}>-</button>
                    <input className='coffeeCount' type="text" value={count}/>
                    <button className='minusButton' onClick={onIncrease}>+</button>
                </div>
            </div>
        </>
    )
}