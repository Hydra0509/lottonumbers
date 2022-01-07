import React, {useState} from 'react'
import hatoslotto2 from './hatoslotto2.jpg'
import { Link } from 'react-router-dom';
import homelogo from './homelogo.png'

export default function Hatoslotto() {

    let [randomNumberOne,setRandomNumberOne] = useState()
    let [randomNumberTwo,setRandomNumberTwo] = useState()
    let [randomNumberThree,setRandomNumberThree] = useState()
    let [randomNumberFour,setRandomNumberFour] = useState()
    let [randomNumberFive,setRandomNumberFive] = useState()
    let [randomNumberSix,setRandomNumberSix] = useState()

    function Numbers() {
        setRandomNumberOne(Math.round(Math.random() * 44 +1 ))
        setRandomNumberTwo(Math.round(Math.random() * 44 +1 ))
        setRandomNumberThree(Math.round(Math.random() * 44 +1 ))
        setRandomNumberFour(Math.round(Math.random() * 44 +1 ))
        setRandomNumberFive(Math.round(Math.random() * 44 +1 ))
        setRandomNumberSix(Math.round(Math.random() * 44 +1 ))

       }


    return (
        <>
        <Link to="/home"><img className="homelogo" src={homelogo} /></Link>
        <div className="lotto6os"><img className="hatospic" src={hatoslotto2} /></div> 
    <div className="numbers">
    <h1>A te számaid:</h1>
    <h1>{randomNumberOne}</h1>
    <h1>{randomNumberTwo}</h1>
    <h1>{randomNumberThree}</h1>
    <h1>{randomNumberFour}</h1>
    <h1>{randomNumberFive}</h1>
    <h1>{randomNumberSix}</h1>
        </div>
    <div className="button"><button onClick={() => Numbers()}>Get your numbers</button></div>
        </>
    )
}