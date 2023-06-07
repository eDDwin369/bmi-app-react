import React from 'react'
import './Form.css'
import { useState } from 'react'

function Form({getData}) {

    const [weight, setweight] = useState("")
    const [height, setheight] = useState("")
    const [alert, setalert] = useState(false)



    const getWeight = (e) => {
        setweight(e.target.value)
        console.log(e.target.value);
    }

    const getHeight = (e) => {
        setheight(e.target.value)
        console.log(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (isNaN(weight) || isNaN(height)) {
            console.log("invalid");
            setalert(true)

        } else {
            setalert(false)
            getData(weight, height)
            setheight('')
            setweight('')



           
        }
    };
let alertMessage
if(alert){
    alertMessage=<div className='alert alert-danger' role='alert'>plz enter valid data</div>

}else{
    alertMessage='';

}






    return (
        <div className='back'>
            <    div className='outline'>
                <div className='heading'><h1>BMI Calculator</h1>
                </div>

                <form className='form' onSubmit={onSubmit}>
                    <div className='weight'  >
                        <h5>Weight(m)</h5>
                        <input type="text" value={weight} onChange={getWeight} required />
                    </div>
                    <div className='height'>
                        <h5>height(m)</h5>
                        <input type="text" value={height} onChange={getHeight} required />
                    </div>
                    <div className='butto'>
                        <input type="submit" className='btn btn-danger' value='get bmi' />
                    </div>
                </form>
                {alertMessage}




            </div>

        </div>
    )
}

export default Form