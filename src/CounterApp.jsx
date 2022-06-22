import PropTypes from 'prop-types';
import { useState } from 'react';
export default function CounterApp({ value }) {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleReset = () => setCounter(value);
	const handleSubstract = () => setCounter((c) => c - 1);

	return (
		<>
			<h1>Counter App</h1>
			<h2>{counter}</h2>
			<button onClick={handleAdd}>+1</button>
			<button aria-label="btn-reset" onClick={handleReset}>
				reset
			</button>
			<button data-testid="test-1" onClick={handleSubstract}>
				-1
			</button>
		</>
	);
}

CounterApp.prototype = {
	value: PropTypes.number.isRequired,
};
