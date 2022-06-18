import { Fragment } from 'react'
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

function App() {

	return (
		<Fragment>
			<h1>Hola {name}</h1>
			{/* <p>{subTitle}</p> */}
			<p>Arreglo {arr}</p>
			<p>Sumar números {addNumbers(4, 5)}</p>
			<pre>Objeto = {JSON.stringify(obj, null, 2)}</pre>
			{/* <p>Propiedad recibida = {propSent}</p> */}
		</Fragment>
	)
}

export default App
