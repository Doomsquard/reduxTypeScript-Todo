import React, { useEffect, useRef } from 'react';
import { addCard, addItem } from '../../redux/actions/index';
import { connect } from 'react-redux';

const CreateCards = (props) => {
	const inputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(inputRef.current.closest('div').parentNode.id);
		if (inputRef.current.value.length)
			inputRef.current.closest('div').parentNode.id === 'main'
				? props.createCard(inputRef.current.value)
				: props.createDeal(
						inputRef.current.value,
						inputRef.current.closest('div').parentNode.id,
				  );
		inputRef.current.focus();
		inputRef.current.value = '';
	};

	useEffect(() => {
		inputRef.current.focus();
	}, [props.state]);

	return (
		<div className='main__createCards'>
			<p className='main__createCards-title'>{props.title}</p>
			<form
				className='main__createCards-form'
				onSubmit={(e) => submitHandler(e)}>
				<input
					className='main__createCards-input'
					ref={inputRef}
					maxLength={40}
				/>
				<button type='submit' className='main__createCards-button'>
					Submit
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.cardReducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createCard: (title) => dispatch(addCard(title)),
		createDeal: (title, id) => dispatch(addItem(title, id)),
	};
};

export default connect(null, mapDispatchToProps)(CreateCards);
