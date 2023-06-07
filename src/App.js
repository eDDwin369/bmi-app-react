
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';
import { startTransition, useState } from 'react';


function App() {



  const [bmi, setBmi] = useState('0')
  const [bmiType, setBmiType] = useState('')
  const [bmiRange, setbmiRange] = useState({

    underweight: { low: "" },
    normal: { low: "", high: "" },
    overweight: { low: "", high: "" },
    obesitycalss1: { low: "", high: "" },
    obesitycalss2: { low: "", high: "" },
    obesitycalss3: { low: "", high: "" },
  })
  const [show, setshow] = useState(false)
  const onFormSub = (w, h) => {
    let b = calBmi(w, h)
    setBmi(b)
    console.log(w, h);

    let bType = weightType(b)
    setBmiType(bType)
    const range = {
      underweight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overweight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesitycalss1: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesitycalss2: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesitycalss3: { high: calWeight(40, h) },
    }
    setbmiRange(range);
    setshow(true)
    

  }
  

  const calBmi = (w, h) => {
    return (w / (h * h)).toFixed(2);
  }
  const calWeight = (b, h) => (b * h * h).toFixed(2);



  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return <h3 style={{color:"blue"}}>Underweight</h3>;
    } else if (18.5 < bmi && bmi < 24.9) {
      return <h3 style={{color:"green"}}>Normal</h3>;
    } else if (24.9 < bmi && bmi < 29.9) {
      return <h3 style={{color:"red"}}>Overweight</h3>;
    } else if (29.9 < bmi && bmi < 34.9) {
      return <h3 style={{color:"red"}}>Obesity Class I</h3>;
    } else if (34.9 < bmi && bmi < 39.9) {
      return <h3 style={{color:"red"}}>Obesity Class II</h3>;
    } else if (bmi > 39.9) {
      return <h3 style={{color:"red"}}>Obesity Class III</h3>;
    }
  };





  return (
    
    <>
    <div className='image' style={{backgroundImage:`url("https://static.vecteezy.com/system/resources/previews/000/168/920/original/healthcare-medical-background-with-electrocardiogram-vector.jpg")`}}>
    <Form getData={onFormSub} />

{show && (
<>
<div><BmiScore bmiNo={bmi} bmiName={bmiType} /></div>
<div><BmiList range={bmiRange} bmi={bmi} /></div>
</>

)}
    </div>

    </>
  );

}
export default App;

