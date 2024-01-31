import { render, screen } from "@testing-library/react-native";

import { Input } from "./index";

describe("Component: Input", () => {
  it("shoud be render without active loading if isLoading prop is undefined", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });

  it("shoud be render with active loading if isLoading prop is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
