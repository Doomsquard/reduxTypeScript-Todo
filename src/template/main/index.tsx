import React from 'react'
import Cards from './cards.js'
import CreateCards from './createCards.js'

export const Main=()=>{
    return (
        <main className='main' id='main'>
            
            <Cards/>
            <CreateCards title='Create Card'/>
        </main>
    )
}