import { render } from '@testing-library/react';
import App from '../src/App';

describe('Pruebas en <App />', () => {
	test('Debe hacer match con el snapshot', () => {
		const title = 'Bienvenido';

		const { container } = render(<App title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el título en H1', () => {
		const title = 'Bienvenido';
		const { container, getByText } = render(<App title={title} />);
		const h1 = container.querySelector('h1');

		expect(getByText(`${title} Enrique`)).toBeTruthy();
		expect(h1.innerHTML).toBe(`${title} Enrique`);
	});
});
