import React, { useState } from 'react'

const StateExample = () => {

    //let count = 0;
    const [count , setCount] = useState(0);

    const increaseCount = () => {
        // count += 1;
        //console.log(`count = ${count}`);
        
        //setCount(count + 1);
        setCount((prev) =>  prev +1);
    }
    return (
        <>
            <div>
                <p> Count : {count }</p>
                <button onClick={increaseCount}> Increase Count</button>
            </div>
        </>
    )
}

export default StateExample