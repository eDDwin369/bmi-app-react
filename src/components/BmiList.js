import React from 'react'
import './BmiList.css'

function BmiList({range,bmi}) {
  console.log(range);
  return (
    
    <div className="list">
      <ul className="list-group">
        <li className="list-group-items">
          <div className="row">
            <div className="col-4 fw-bold"  >Type</div>
            <div className="col-4 fw-bold" >BMI</div>
            <div className="col-4 fw-bold" >Weight(kg)</div>
  
  
          </div><br />
  
        </li>
        <li className={bmi<18.5?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className='col-4'> Underweight</div>
            <div className='col-4'>   &lt;18.5</div>
            <div className='col-4'>&lt;{range.underweight.low } kg</div>
          </div>
  
        </li>
        <li className={bmi<24.9&&bmi>18.5?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className='col-4'>Normal</div>
            <div className='col-4'>   18.5-24.9</div>
            <div className='col-4'>{range.normal.low} kg-{range.normal.high} kg</div>
          </div>
  
        </li>
        <li className={bmi<29.9&&bmi>25?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className='col-4'>Overweight</div>
            <div className='col-4'>   25-29.9</div>
            <div className='col-4'>{range.overweight.low} kg-{range.overweight.high} kg</div>
          </div>
  
        </li>
        <li className={bmi<34.9&&bmi>30?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className='col-4'> Obesity Class I</div>
            <div className='col-4'> 30-34.9</div>
            <div className='col-4'>{range.obesitycalss1.low} kg-{range.obesitycalss1.high} kg</div>
          </div>
  
        </li>
        <li className={bmi<39.5&&bmi>35?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className='col-4'>Obesity Class II</div>
            <div className='col-4'>   35-39.9</div>
            <div className='col-4'>{range.obesitycalss2.low+"kg"} -{range.obesitycalss2.high+"kg"}</div>
          </div>
  
        </li>
        <li className={bmi>40?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div className="row">
            <div className='col-4'>Obesity Class III</div>
            <div className='col-4'> &gt;40</div>
            <div className='col-4'>&gt;{range.obesitycalss3.high} kg</div>
          </div>
  
        </li>
  
      </ul>
    </div>
    
    
    
    
    
  )
}

export default BmiList