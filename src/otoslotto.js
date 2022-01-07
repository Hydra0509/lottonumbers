import React,{useState} from 'react'
import lotto5os from "./lotto5.jpg"
import { Link } from 'react-router-dom';
import homelogo from './homelogo.png'

 
export default function Otoslotto() {

   let [randomNumberOne,setRandomNumberOne] = useState()
   let [randomNumberTwo,setRandomNumberTwo] = useState()
   let [randomNumberThree,setRandomNumberThree] = useState()
   let [randomNumberFour,setRandomNumberFour] = useState()
   let [randomNumberFive,setRandomNumberFive] = useState()


   function Numbers() {
    setRandomNumberOne(Math.round(Math.random() * 89 +1 ))
    setRandomNumberTwo(Math.round(Math.random() * 89 +1 ))
    setRandomNumberThree(Math.round(Math.random() * 89 +1 ))
    setRandomNumberFour(Math.round(Math.random() * 89 +1 ))
    setRandomNumberFive(Math.round(Math.random() * 89 +1 ))
   }
   
    return (
        <>
        <Link to="/home"><img className="homelogo" src={homelogo} /></Link>
       <div className="lotto5os"><img className="otospic" src={lotto5os} /></div> 
    <div className="otos">
    <h1>Ötös lottó nyerőszámok:</h1>
    </div>
    <div className="numbers">
    <h1>{randomNumberOne}</h1>
    <h1>{randomNumberTwo}</h1>
    <h1>{randomNumberThree}</h1>
    <h1>{randomNumberFour}</h1>
    <h1>{randomNumberFive}</h1>
    </div>
    <div className="button"><button onClick={() => Numbers()}>Get your numbers</button></div>
        </>
    )
}
