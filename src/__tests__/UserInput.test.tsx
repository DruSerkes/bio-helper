import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { UserInput } from '../components/UserInput';

describe('UserInput tests', () => {
  const value = 'test value';
  const setInput = jest.fn();

  it('should render without breaking', () => {
    render(<UserInput input={value} setInput={setInput} />);
  });

  it('should render value', () => {
    const { getByLabelText } = render(<UserInput input={value} setInput={setInput} />);
    const textArea = getByLabelText('Bio');
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveValue(value);
  });

  it('should call setInput', () => {
    const { getByLabelText } = render(<UserInput input={value} setInput={setInput} />);
    const textArea = getByLabelText('Bio');
    fireEvent.change(textArea, { target: { value: 'change it up!' } });
    expect(setInput).toHaveBeenCalledTimes(1);
    expect(setInput).toHaveBeenCalledWith('change it up!');
  });
});