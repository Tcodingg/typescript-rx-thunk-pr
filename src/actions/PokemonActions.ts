import { Dispatch } from 'redux';

const getPokemon = () => (dispatch: Dispatch) => {
	try {
		dispatch({ type: 'LOADING_POKEMON' });
	} catch (error) {}
};
