import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

const mockSetTheme = jest.fn();

jest.mock('./ui/theme-provider', () => ({
  useTheme: () => ({
    theme: 'light',   //after: try dark
    setTheme: mockSetTheme,
  }),
}));

describe('Header', () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it('renderiza os botões de navegação', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('chama setCurrentPage quando um botão é clicado', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    const homeButton = screen.getByText('Home');
    fireEvent.click(homeButton);

    expect(mockSetCurrentPage).toHaveBeenCalledWith('home');
  });

  it('renderiza o ícone do tema correto', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    expect(screen.getByTestId('lucide-moon')).toBeInTheDocument();
  });

  it('muda o tema ao clicar no botão de tema', () => {
    const mockSetCurrentPage = jest.fn();
    render(<Header setCurrentPage={mockSetCurrentPage} />);

    const themeToggleButton = screen.getByTestId('lucide-moon').closest('button')!;
    fireEvent.click(themeToggleButton);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
});
