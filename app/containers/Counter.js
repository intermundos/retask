import React        from 'react';
import { connect }        from 'react-redux';

import ButtonView        from 'components/Button';

const ButtonContainer = connect(
	(state, { bindings: { selectCounter } }) => ({ text: selectCounter(state) }),
	(dispatch, { counter }) => ({ onClick() { dispatch({ type: 'BUTTON_CLICKED', payload: { counter } }); } })
)(ButtonView);

export default ButtonContainer;