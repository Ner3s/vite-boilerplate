import { Main } from '.';

import { render, screen } from '@testing-library/react';

describe('<Main />', () => {
  it('should be render correctly', () => {
    render(<Main />);

    const title = screen.getByText(/Vite - Boilerplate/i);

    expect(title).toBeInTheDocument();
  });
});
