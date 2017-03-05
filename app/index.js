// css vendors
import 'sanitize.css/sanitize.css';
import 'bulma/css/bulma.css';

// css libs
import 'static/styles/libs/libs.scss';

// css global
import 'static/styles/global/global.scss';


import React        from 'react';
import { render }        from 'react-dom';

import { Provider }        from 'react-redux';
import configureStore        from 'logic/store/configureStore';

import { BrowserRouter as Router, Link }         from 'react-router-dom';
import Routes        from 'logic/routes/routes';

//Common components
import Header        from 'components/common/Header';

const store = configureStore();

render(
	<Provider store={ store }>
		<Router history={ history }>
		   <div>
			   <Header />
			   <Routes />

		   </div>
		</Router>
	</Provider>,
	document.getElementById('entry')
);

if (module.hot) {
    module.hot.accept();
}



