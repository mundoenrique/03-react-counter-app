import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Pruebas en <App />', () => {
	const title = 'Bienvenido';
	const subTitle = 'Aprendiendo React con vite';

	test('Debe hacer match con el snapshot', () => {
		const { container } = render(<App title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el mensaje "Bienvenido Enrique"', () => {
		render(<App title={title} />);

		expect(screen.getByText(`${title} Enrique`)).toBeTruthy();
	});

	test('Debe mostrar el mensaje "Bienvenido Enrique" en <h1>', () => {
		render(<App title={title} />);

		expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
			`${title} Enrique`
		);
	});

	test('Debe mostrar el subtitulo', () => {
		render(<App title={title} subTitle={subTitle} />);

		expect(screen.getByText(subTitle)).toBeTruthy();
		expect(screen.getAllByText(subTitle).length).toBe(1);
	});
});
