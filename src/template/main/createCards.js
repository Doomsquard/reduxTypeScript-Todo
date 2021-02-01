import React,{useRef} from 'react'
import {addItem} from '../../redux/actions/index'
import {connect} from 'react-redux'


const CreateCards=(props)=>{

    const inputRef = useRef(null)

    const submitHandler=(e)=>{
        e.preventDefault()
        props.createCard(inputRef.current.value)
        inputRef.current.value=''
    }

    return (
        <div className='main__createCards'>
            <p className="main__createCards-title">Create Card</p>
            <form className='main__createCards-form' onSubmit={e=>submitHandler(e)}>
                <input className='main__createCards-input' ref={inputRef} maxLength={40}/>
                <button type='submit' className='main__createCards-button'>Submit</button>
            </form>
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return {
        createCard:text=>dispatch(addItem(text))
    }
}

export default connect(null,mapDispatchToProps)(CreateCards)