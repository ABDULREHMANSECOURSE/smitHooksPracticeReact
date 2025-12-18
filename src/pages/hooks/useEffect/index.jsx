import { useEffect, useState } from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn';

const useEffectFunc = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
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

export default useEffectFunc