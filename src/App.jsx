import { Fragment } from 'react'
import PropTypes from 'prop-types'
import './App.css'

const name = 'Enrique';
const arr = [1, 2, 3, 4, 5, 6];
const obj = {
	name: 'yajaira',
	edad: 40
}

function addNumbers(a, b) {
	return a + b;
}

export default function App({ title, subTitle }) {

	return (
		<Fragment>
			<h1>{title} {name}</h1>
			<h2>{subTitle}</h2>
			<p>Arreglo {arr}</p>
			<p>Sumar números {addNumbers(4, 5)}</p>
			<pre>Objeto = {JSON.stringify(obj, null, 2)}</pre>
		</Fragment>
	)
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
}

App.defaultProps = {
	title: 'Sin título',
	subTitle: 'Aprendiendo React'
}
