import React from 'react'
import {connect} from 'react-redux'

const Cards=(props)=>{
    console.log(props)
    return (
        <section className='main__cards'>
            <p className='main__cards-title'>title</p>
            <div className='main__cards-wrapper'>
                <ul className='main__cards-list'>
                    {props.list.listReducer.map((i)=>{
                        return (
                            <li className="main__cards-item">{i.deal}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps=(state)=>{
    return {
        list:state
    }
}

export default connect(mapStateToProps)(Cards)