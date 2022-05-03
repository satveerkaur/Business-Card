import React from 'react'
import profile from '../image/satveer-kaur.jpeg'
import '../index.css'

export default function Header(){
    return(
        <header>
            <img src={profile} className="profile__img" alt=""/>
            <div className='profile__info'>
            <h1>Satveer Kaur</h1>
            <h2>Frontend Developer</h2>
            <a className="profile__link" href="https://satveerkaur.github.io/Portfolio/">Portfolio</a>
            <ul>
                <li><button><a href="mailto:satkaurdhillon@gmail.com" className="profile__mail">Email</a></button></li>
            </ul>
            

            </div>
        </header>
    )
}