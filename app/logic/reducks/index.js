import  { combineReducers }   from      'redux';

import counter from './counter';
import  login   from      './login';
import  signup   from      './signupDuck';


const rootDuck = combineReducers({ signup });

export default rootDuck;