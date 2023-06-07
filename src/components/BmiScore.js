import React from 'react'
import './BmiScore.css'

function BmiScore({ bmiNo, bmiName }) {






    return (
        <>
            <div className='back1'>
                <    div className='outline'>
                    <div className='heading'><h2>Your BMI score</h2>
                    </div><br />
                    <div className='bmino'>
                        <h2> {bmiNo}</h2>
                    </div><br />

                    <div>
                        <h1>{bmiName}</h1>
                    </div>







                </div>

            </div>






        </>

    )
}

export default BmiScore