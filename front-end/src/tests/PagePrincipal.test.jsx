import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';

/* globals describe, expect, it */
describe('Verificando se é rederizados os elementos na tela principal', () => {
  describe('Pagina Principal', () => {
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
      const txtTexto = screen.getByTestId('texto');
      expect(txtTexto).toBeInTheDocument();
    });
    it('Verificando se o input de "Título" está na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const txtTitulo = screen.getByTestId('Título');
      expect(txtTitulo).toBeInTheDocument();
    });
    it('Verificando se o botão de "Pesquisar" esta na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const btn = screen.getByTestId('btn-pesquisa');
      expect(btn).toBeInTheDocument();
    });
    it('Verificando se o botão de "Limpar" esta na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const btnLimpar = screen.getByTestId('limpar');
      expect(btnLimpar).toBeInTheDocument();
    });
    it('Verificando se o botão de "Salvar" esta na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const btnSalvar = screen.getByTestId('salvar');
      expect(btnSalvar).toBeInTheDocument();
    });
    it('Verifica se existe 3 botões na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);
    });
    it('Verificando se o filtro por data esta na tela', () => {
      render(<MemoryRouter><App /></MemoryRouter>);
      const filtro = screen.getByTestId('filtro-data');
      expect(filtro).toBeInTheDocument();
    });
  });
});
