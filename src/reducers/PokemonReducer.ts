import {
	PokemonDispatchTypes,
	PokemonType,
	POKEMON_FAIL,
	POKEMON_LOADING,
	POKEMON_SUCCESS,
} from './../actions/PokemonActionTypes';

interface DefaultStateI {
	loading: boolean;
	pokemon?: PokemonType;
}

const defaultState: DefaultStateI = {
	loading: false,
};

const pokemonReducer = (
	state: DefaultStateI = defaultState,
	action: PokemonDispatchTypes
): DefaultStateI => {
	switch (action.type) {
		case POKEMON_LOADING:
			return {
				loading: true,
			};

		case POKEMON_SUCCESS:
			return {
				loading: false,
				pokemon: action.payload,
			};
		case POKEMON_FAIL:
			return {
				loading: false,
			};

		default:
			return state;
	}
};

export default pokemonReducer;
