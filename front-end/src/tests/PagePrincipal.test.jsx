import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';

/* globals describe, expect, it */
describe('Verificando se é rederizados os elementos na tela principal', () => {
  describe('Header', () => {
    it('Verificando se tem duas imagem logo e a lupa esta na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const logo = screen.getAllByRole('img');
      expect(logo).toHaveLength(2);
    });
    it('Verificando se existe 3 input na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const input = screen.getAllByRole('textbox');
      expect(input).toHaveLength(3);
    });
    it('Verificando se o input de "Pesquisa" está na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const txtPesquisa = screen.getByTestId('Pesquisar por título');
      expect(txtPesquisa).toBeInTheDocument();
    });
    it('Verificando se o input de "Texto" está na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const txtPesquisa = screen.getByTestId('texto');
      expect(txtPesquisa).toBeInTheDocument();
    });
    it('Verificando se o input de "Título" está na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const txtPesquisa = screen.getByTestId('Título');
      expect(txtPesquisa).toBeInTheDocument();
    });
    it('Verificando se o botão de pesquisar esta na tela', () => {

    });
    it('Verificando se o filtro por data esta na tela', () => {

    });
  });
});
