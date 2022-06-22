import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
	const value = 10;

	test('Debe hacer natch con el snapshot', () => {
		const { container } = render(<CounterApp value={value} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el valor inicial de 100', () => {
		render(<CounterApp value={100} />);

		expect(screen.getByText('100')).toBeTruthy();
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
			'100'
		);
	});

	test('Debe incrementar en un con el botón +1', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('+1'));

		expect(screen.getByText(value + 1)).toBeTruthy();
	});

	test('Debe incrementar en un con el botón -1', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('-1'));

		expect(screen.getByText(value - 1)).toBeTruthy();
	});

	test('Debe incrementar funcionar el botón reset', () => {
		render(<CounterApp value={value} />);

		fireEvent.click(screen.getByText('-1'));
		fireEvent.click(screen.getByText('-1'));
		fireEvent.click(screen.getByText('-1'));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		expect(screen.getByText(value)).toBeTruthy();
	});
});
