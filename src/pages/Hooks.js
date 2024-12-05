import React from 'react'
import StateExample from './hooks/StateExample'
import { EffectExample } from './hooks/EffectExample'
import { ContextExample } from './hooks/ContextExample'
import { ReducerExample } from './hooks/ReducerExample'

const Hooks = () => {
    return (
        <>
            <style>
                {`
          .border {
            border : 1px solid black;
            padding : 5px;
            margin : 5px;
          }
        `}
            </style>
            <div>Hooks</div>

            <div className='border'>
                <p> useReducer - it's an alternative to useState for more complex actions </p>
                <ReducerExample />
            </div>

            <div className='border'>
                <p> useContext </p>
                <ContextExample />
            </div>
            <div className='border'>
                <p> useEffect </p>
                <EffectExample />
            </div>
            <div className='border'>
                <p> useState</p>
                <StateExample />
            </div>
        </>
    )
}

export default Hooks
