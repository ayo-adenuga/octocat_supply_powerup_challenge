import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
import { useTheme } from '../context/ThemeContext';

vi.mock('../context/ThemeContext', () => ({
  useTheme: vi.fn(),
}));

describe('About', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders core about page content in light mode', () => {
    vi.mocked(useTheme).mockReturnValue({
      darkMode: false,
      toggleTheme: vi.fn(),
    });

    const { container } = render(<About />);

    expect(
      screen.getByRole('heading', { name: /about octocat supply/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /our meow-ssion/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /our purr-pose/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /key features of our products/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/welcome to octocat supply, your premier destination/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/felix whiskerton, founder/i)).toBeInTheDocument();

    expect(screen.getByText(/real-time health monitoring and wellness alerts/i)).toBeInTheDocument();

    const pageWrapper = container.firstElementChild;
    expect(pageWrapper).toHaveClass('bg-gray-100');
  });

  it('applies dark mode classes when dark mode is enabled', () => {
    vi.mocked(useTheme).mockReturnValue({
      darkMode: true,
      toggleTheme: vi.fn(),
    });

    const { container } = render(<About />);

    const pageWrapper = container.firstElementChild;
    const card = pageWrapper?.firstElementChild;
    const title = screen.getByRole('heading', { name: /about octocat supply/i });

    expect(pageWrapper).toHaveClass('bg-dark');
    expect(card).toHaveClass('bg-gray-800');
    expect(title).toHaveClass('text-white');
  });
});