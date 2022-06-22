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
		const { container, getByText, getByTestId } = render(<App title={title} />);
		const h1 = container.querySelector('h1');

		expect(getByText(`${title} Enrique`)).toBeTruthy();
		expect(h1.innerHTML).toBe(`${title} Enrique`);
		expect(h1.innerHTML).toContain(`${title} Enrique`);
		expect(getByTestId('test-title')).toBeTruthy();
		expect(getByTestId('test-title').innerHTML).toBe(`${title} Enrique`);
		expect(getByTestId('test-title').innerHTML).toContain(`${title} Enrique`);
	});

	test('Debe mostrar el sub titulo', () => {
		const title = 'Bienvenido';
		const subTitle = 'Aprendiendo React con vite';
		const { getByText, getAllByText } = render(
			<App title={title} subTitle={subTitle} />
		);

		expect(getByText(subTitle)).toBeTruthy();
		expect(getAllByText(subTitle).length).toBe(1);
	});
});
