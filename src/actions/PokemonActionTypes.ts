// import { POKEMON_LOADING } from './PokemonActionTypes';
export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

interface PokemonLoading {
	type: typeof POKEMON_LOADING;
}
interface PokemonFail {
	type: typeof POKEMON_FAIL;
}
interface PokemonSuccess {
	type: typeof POKEMON_SUCCESS;
	payload: {};
}
