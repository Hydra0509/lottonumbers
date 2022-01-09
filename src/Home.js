import React from 'react'
import { Link } from 'react-router-dom';
import lotto52 from './lotto52.png'
import hatoslotto1 from './hatoslotto1.jpg'
import eurojackpot1 from './eurojackpot1.jpg'
import skandinav1 from './skandinav1.jpg'
import lottologo from './lottologo.png'

export default function HomePage() {
    return (
        <>
        <div className="lottologo"><img src = {lottologo} /></div>
        <div className="otoslotto1"><Link to="/otoslotto"><img src={lotto52} /></Link></div>
        <div className="hatoslotto1"><Link to="/hatoslotto"><img src={hatoslotto1} /></Link></div>
        <div className="eurojackpot1"><Link to="/eurojackpot"><img src={eurojackpot1} /> </Link></div>
        <div className="skandinav1"><Link to="/skandinav"><img src={skandinav1} /></Link></div>
        </>
    )
}