import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  describe('Render', () => {
    it('should be render with text', () => {
      const { getByText } = render(<Button />);
      const buttonText = getByText('Manage Account');
      expect(buttonText).toBeDefined();
    });
  });
});
