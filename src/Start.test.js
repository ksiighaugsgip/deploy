import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Start from './Start';

test('Есть ли кнока?', () => {
  render(
    <BrowserRouter>
      <Start />
    </BrowserRouter>
  );

  const buyButton = screen.getByText('Купить кофе');
  expect(buyButton).toBeInTheDocument();

  userEvent.click(buyButton);

  expect(window.location.pathname).toBe('/main');
});