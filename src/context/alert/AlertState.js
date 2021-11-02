import React from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import { useReducer } from 'react/cjs/react.development';

const AlertState = (props) => {
	const initialState = null;

	const [state, dispatch] = useReducer(AlertReducer, initialState);

	// Set Alert
	const setAlert = (msg, type) => {
		dispatch({
			tpye: SET_ALERT,
			payload: { msg, type },
		});

		setTimeout(
			() =>
				dispatch({
					type: REMOVE_ALERT,
				}),
			3000
		);
	};

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
