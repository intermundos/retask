import React        from 'react';
import ButtonView        from '../../components/counter/button';
import { connect }        from 'react-redux';


const ButtonContainer = connect(
		(state, { bindings: { selectCounter } }) => ({ text: selectCounter(state) }),
		(dispatch, { counter }) => ({ onClick() { dispatch({ type: 'BUTTON_CLICKED', payload: { counter } }); } })
	)(ButtonView);

export default ButtonContainer;