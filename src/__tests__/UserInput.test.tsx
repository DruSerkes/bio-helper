import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { UserInput } from '../components/UserInput';

describe('UserInput tests', () => {
  const value = 'test value';
  const newValue = 'change it up!';
  const setInput = jest.fn();

  it('should render without breaking', () => {
    render(<UserInput input={value} setInput={setInput} darkMode={false} />);
  });

  it('should render value', () => {
    const { getByLabelText } = render(<UserInput input={value} setInput={setInput} darkMode={false} />);
    const textArea = getByLabelText('My Bio');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveValue(value);
  });

  it('should be in dark mode', () => {
    const { getByLabelText, getByText } = render(<UserInput input={value} setInput={setInput} darkMode={true} />);
    const textArea = getByLabelText('My Bio');
    expect(textArea).toHaveClass('dark');

    const clearButton = getByText('Start Over');
    expect(clearButton).toHaveClass('button-dark');
  });

  it('should call setInput', () => {
    const { getByLabelText } = render(<UserInput input={value} setInput={setInput} darkMode={false} />);
    const textArea = getByLabelText('My Bio');
    fireEvent.change(textArea, { target: { value: newValue } });
    expect(setInput).toHaveBeenCalledTimes(1);
    expect(setInput).toHaveBeenCalledWith(newValue);
  });

  it('should clear the text', () => {
    const { getByLabelText, getByText } = render(<UserInput input={value} setInput={setInput} darkMode={false} />);
    const textArea = getByLabelText('My Bio');
    const clearButton = getByText('Start Over');

    fireEvent.change(textArea, { target: { value: newValue } });
    expect(setInput).toHaveBeenCalledTimes(1);
    expect(setInput).toHaveBeenCalledWith(newValue);

    fireEvent.click(clearButton);
    expect(setInput).toHaveBeenCalledTimes(2);
    expect(setInput).toHaveBeenCalledWith('');
  });
});