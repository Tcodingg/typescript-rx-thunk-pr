import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon } from './actions/PokemonActions';
import { RootStore } from './Store';

function App() {
	const dispatch = useDispatch();
	const [pokemonName, setPokemonName] = useState('');

	const pokemonState = useSelector((state: RootStore) => state.pokemon);

	const handleSubmit = () => dispatch(getPokemon(pokemonName));
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setPokemonName(event.target.value);

	console.log('pokomen state', pokemonState);

	return (
		<div className='App'>
			<input onChange={handleChange} type='text' />
			<button onClick={handleSubmit}>Submit</button>
			<div>
				{pokemonState.pokemon && (
					<div>
						<img src={pokemonState.pokemon.sprites.front_default} alt='' />
						{pokemonState.pokemon.abilities.map((ability) => {
							return <p>{ability.ability.name}</p>;
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
