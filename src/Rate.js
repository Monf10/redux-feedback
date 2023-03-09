import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function Rate (){
    const dispatch = useDispatch() 
    const feedback =  useSelector(state => state.feedback);
    const [value, setValue] = useState("")

    function addFeedback(e){
        e.preventDefault();
        const newValue = value

        dispatch({type : "addFeedback", data:newValue})
        setValue("")
    }
    return(
        <div >
            <h1> Add  Feedback</h1>
            <form onSubmit={addFeedback}>
                <input
                type="text"
                value = {value} 
                onChange={e => setValue(e.target.value)}
                />
            </form>
            <div className='feedbackDiv'>{feedback}</div>   
        </div>
    )
}
