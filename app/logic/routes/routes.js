import React        from 'react';
import { Route }        from 'react-router-dom';

import Home        from '../../components/pages/HomePage';
import Login        from '../../components/pages/LoginPage';


const Routes = () => {
	return (
		<div>
			<Route exact path={`/`} component={ Home } />
			<Route path={`/login`} component={ Login }/>

		</div>
	)
};

export default Routes;