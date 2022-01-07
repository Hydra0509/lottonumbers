import React, {useState} from 'react'
import eurojackpot2 from './eurojackpot2.png'
import { Link } from 'react-router-dom';
import homelogo from './homelogo.png'


export default function Eurojackpot() {

    let [randomNumberOne,setRandomNumberOne] = useState()
   let [randomNumberTwo,setRandomNumberTwo] = useState()
   let [randomNumberThree,setRandomNumberThree] = useState()
   let [randomNumberFour,setRandomNumberFour] = useState()
   let [randomNumberFive,setRandomNumberFive] = useState()
   let [randomNumberSix,setRandomNumberSix] = useState()
   let [randomNumberSeven,setRandomNumberSeven] = useState()


   function Numbers() {
    setRandomNumberOne(Math.round(Math.random() * 49 +1 ))
    setRandomNumberTwo(Math.round(Math.random() * 49 +1 ))
    setRandomNumberThree(Math.round(Math.random() * 49 +1 ))
    setRandomNumberFour(Math.round(Math.random() * 49 +1 ))
    setRandomNumberFive(Math.round(Math.random() * 49 +1 ))
    setRandomNumberSix(Math.round(Math.random() * 9 +1 ))
    setRandomNumberSeven(Math.round(Math.random() * 9 +1 ))
   }


    return (
        <>
        <Link to="/"><img className="homelogo" src={homelogo} /></Link>
    <div className="lotto5os"><img className="otospic" src={eurojackpot2} /></div> 
    <div className="numbers">
    <h1>A mező:</h1>
    <h1>{randomNumberOne}</h1>
    <h1>{randomNumberTwo}</h1>
    <h1>{randomNumberThree}</h1>
    <h1>{randomNumberFour}</h1>
    <h1>{randomNumberFive}</h1>
    <h1>B mező:</h1>
    <h1>{randomNumberSix}</h1>
    <h1>{randomNumberSeven}</h1>
    </div>
    <div className="button"><button onClick={() => Numbers()}>Get your numbers</button></div>
        </>
    )
}