import React, { useMemo, useState } from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn'

const UseMemo = () => {
    const [count, setCount] = useState(0)

    const title = useMemo( () => {
        return "useMemo - Count: " + count ;
    }, [count])
    document.title = title;
    return (
        <>
            <BackToHomeBtn />
            <h2>This is the useMemo Page</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default UseMemo