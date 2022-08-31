import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import CardBlog from '../Components/CardBlog';

/* globals describe, expect, it */
describe('Verificando os cards', () => {
  it('Verificando se o card é renderizado', () => {
    render(<MemoryRouter><CardBlog /></MemoryRouter>);
    const btn = screen.getAllByTestId('verificando tela');
    console.log(btn);
    expect(btn);
  });
  it('Verificando se o titulo do card aparece', () => {

  });
  it('Verificando os botões do card', () => {

  });
});
