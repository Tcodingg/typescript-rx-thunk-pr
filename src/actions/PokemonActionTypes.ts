// import { POKEMON_LOADING } from './PokemonActionTypes';
export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

export type PokemonAbility = {
	ability: {
		name: string;
		url: string;
	};
};

export type PokemonSprites = {
	front_default: string;
};

export type PokeymonState = {
	base_state: number;
	stat: {
		name: string;
	};
};

export interface PokemonLoading {
	type: typeof POKEMON_LOADING;
}
export interface PokemonFail {
	type: typeof POKEMON_FAIL;
}
export interface PokemonSuccess {
	type: typeof POKEMON_SUCCESS;
	payload: {
		Abilities: PokemonSprites[];
		sprites: PokemonSprites;
		stats: PokeymonState[];
	};
}

export type PokemonDispatchTypes =
	| PokemonLoading
	| PokemonFail
	| PokemonSuccess;
