import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  describe("Render", () => {
    it("should be render with text", () => {
      const { getByText } = render(<Button children="Manage Account" />);
      const buttonText = getByText("Manage Account");
      expect(buttonText).toBeInTheDocument();
    });
  });
});
