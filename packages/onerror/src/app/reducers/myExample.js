import { MY_ACTION } from '../constants';

const defaultState = {
	myStateName: 'hello',
	myStateBool: true,
};

export default function myExampleReducer(state = defaultState, action) {
	switch (action.type) {
		case MY_ACTION: {
			throw new Error('can t reduce it');
		}
		default: {
			return state;
		}
	}
}
