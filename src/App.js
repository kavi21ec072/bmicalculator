import './App.css';
import React,{useState} from 'react';

function App() {
  const [weight, setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');


  let calculatebmi=(event) =>{
    event.preventDefault();
    if(weight === 0 || height === 0)
    {
      alert("Invalid input");
    }
    else{
      let bmi= (weight / (height /100) ** 2)
      setBmi(bmi.toFixed(2))
      if(bmi < 18.5)
      {
        setMessage('You are Underweight')
      }
      else if(bmi >=18.5 && bmi<24.9)
      {
        setMessage('You are Healthy')
      }
      else if (bmi >=25 && bmi<29.9)
      {
        setMessage('You are overweight')
      }
      else {
        setMessage('You are Obese')
      }
    }
  }
  let imgsrc;
  if(bmi<1){
    imgsrc=null;
  }
  else if(bmi<18.5){
    imgsrc=require('./images/skinny.png')
  }
  else if(bmi>=18.5 && bmi<24.9)
  {
    imgsrc=require('./images/healthy boy.jpeg')
  }
  else if (bmi >= 25 && bmi < 29.9)
  {
    imgsrc=require('./images/over weight.jpeg')
  }
  else{
    imgsrc=require('./images/fat boy.jpeg')
  }
  let reload = () =>{
    window.location.reload()
  }
    return (
      <div className="app">
        <div className="container">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calculatebmi}>
            <div>
              <label><b>Weight (Kg)</b></label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label><b>Height (cm)</b></label>
              <input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </form>
          <div className="center">
            <h3>Your BMI is: {bmi} </h3>
            <p>{message} </p>
          </div>
          <div className="img-container">
            <img src= {imgsrc} alt=""></img>
          </div>
        </div>
      </div>
    );
}

export default App;
