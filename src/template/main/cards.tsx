import React from 'react'


export const Cards=()=>{
    return (
        <section className='main__cards'>
            <p className='main__cards-title'>title</p>
            <div className='main__cards-wrapper'>
                <ul className='main__cards-list'>
                    <li className="main__cards-item">work</li>
                    <li className="main__cards-item">study</li>
                    <li className="main__cards-item">relax</li>
                    <li className="main__cards-item">sleep</li>
                </ul>
            </div>
        </section>
    )
}