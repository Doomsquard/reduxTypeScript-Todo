import React from "react";
import { connect } from "react-redux";
import {
  completeDeal,
  deleteCard,
  deleteItem,
} from "../../redux/actions/index.js";
import CreateCards from "./createCards.js";

const Cards = (props) => {
  const handleDeleteItem = (el) => {
    const itemId = el.target.parentNode.id;
    const cardId = el.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(cardId, itemId);
    props.deleteItem(cardId, itemId);
  };

  const handleDeleteCard = (el) => {
    const cardId = el.target.parentNode.parentNode.id;
    props.deleteCard(cardId);
  };

  const handleCompleted = (el) => {
    const itemId = el.target.parentNode.id;
    const cardId = el.target.parentNode.parentNode.parentNode.parentNode.id;
    props.completeDeal(cardId, itemId);
  };

  return props.state.length
    ? props.state.map((item, index) => {
        return (
          <section
            className='main__cards'
            id={item.itemId}
            key={index + Date.now()}>
            <div className='main__cards-header'>
              <p className='main__cards-title'>{item.title}</p>
              <i
                className='bi bi-trash main__cards-delete'
                onClick={(el) => handleDeleteCard(el)}></i>
            </div>

            <div className='main__cards-wrapper'>
              {item.listDeal.length ? (
                <ul className='main__cards-list'>
                  {item.listDeal.map((item, index) => {
                    {
                      return !item.completed ? (
                        <div
                          key={item.deal + index}
                          className='main__cards-items'
                          id={item.id}>
                          <li
                            className='main__cards-item'
                            onClick={(el) => handleCompleted(el)}>
                            {item.deal}
                          </li>
                          <i
                            className='bi bi-backspace'
                            onClick={(el) => handleDeleteItem(el)}></i>
                        </div>
                      ) : (
                        <div
                          key={item.deal + index}
                          className='main__cards-items completed'
                          id={item.id}>
                          <li
                            className='main__cards-item'
                            onClick={(el) => handleCompleted(el)}>
                            {item.deal}
                          </li>
                          <i
                            className='bi bi-backspace'
                            onClick={(el) => handleDeleteItem(el)}></i>
                        </div>
                      );
                    }
                  })}
                </ul>
              ) : null}
            </div>
            <CreateCards title='add Task' />
          </section>
        );
      })
    : null;
};

const mapStateToProps = (state) => {
  return {
    state: state.cardReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (cardId, itemId) => dispatch(deleteItem(cardId, itemId)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    completeDeal: (cardId, itemId) => dispatch(completeDeal(cardId, itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
