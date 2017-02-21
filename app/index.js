if (module.hot) {
	module.hot.accept()
}
import 'static/styles/main.scss';

import React        from 'react';
import { render }        from 'react-dom';

import { Provider }        from 'react-redux';
import configureStore        from './store/configureStore';

import ButtonContainer        from './containers/counter/index';
import { selectCounter }        from './ducks/reducks/counter';

const store = configureStore();

render(
	<Provider store={ store }>
		<div>
		<ButtonContainer counter='counter1' bindings={{ selectCounter: selectCounter('counter1') }}/>
		<ButtonContainer counter='counter2' bindings={{ selectCounter: selectCounter('counter2') }}/>
		</div>
	</Provider>,
	document.getElementById('entry')
);


