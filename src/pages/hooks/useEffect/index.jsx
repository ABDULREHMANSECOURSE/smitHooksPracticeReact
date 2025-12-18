import React from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn';

const useEffect = () => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        document.title = "useEffect - Count: " + count;
    }, [count]);
    return (
        <>
        <BackToHomeBtn />
        <h2>This is the useEffect Page</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default useEffect