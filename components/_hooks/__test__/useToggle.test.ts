import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { useToggle } from '../useToggle';

it('renders correctly', () => {
  const { result } = renderHook(() => useToggle());
  act(() => {
    const [visible, show] = result.current;
    show();
  });
  expect(result.current[0]).toBe(true);
});
