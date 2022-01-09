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
        <Link to="/"><img className="homelogo" src={homelogo} /></Link>
        <div className="lotto6os"><img className="hatospic" src={hatoslotto2} /></div> 
    <div className="numbers">
    <h1 className="number">{randomNumberOne}</h1>
    <h1 className="number">{randomNumberTwo}</h1>
    <h1 className="number">{randomNumberThree}</h1>
    <h1 className="number">{randomNumberFour}</h1>
    <h1 className="number">{randomNumberFive}</h1>
    <h1 className="number">{randomNumberSix}</h1>
        </div>
    <div className="button"><button className="button" onClick={() => Numbers()}>Get numbers</button></div>
    <br></br>
    <div className="button"><a className="link" href="https://bet.szerencsejatek.hu/jatekok/hatoslotto" target="_blank"><button className="button">Megjátszom</button></a></div>
        </>
    )
}