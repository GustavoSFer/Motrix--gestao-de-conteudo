import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
// import renderWithRouter from '../renderWithRouter';
import App from '../App';
import mock from './Mock/cardMock';
import userEvent from '@testing-library/user-event';

/* globals describe, expect, it */
describe('Verificando os cards', () => {
  global.fetch = jest.fn(function (url) {
    return Promise.resolve({
      json: () => Promise.resolve(mock)
    })
  });
  it('Verificando se o titulo do card aparece', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const txtCard = await screen.findByRole('heading', {
      level: 5,
      name: /terceiro/i,
    });
    expect(txtCard).toBeInTheDocument();
  });

  it('Verificando os botões do card', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const btnCard = await screen.findAllByRole('button');
    expect(btnCard).toHaveLength(3);
  });

  it('Verificando encontrar o "Editar" no card', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const editar = await screen.findAllByText('Editar');
    expect(editar).toHaveLength(9);
  });
  it('Verificando ao clicar em editar muda de pagina', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const clickEditar = await screen.findAllByText('Editar');
    expect(clickEditar[0]).toBeInTheDocument();

    userEvent.click(clickEditar[0]);

  });
});
