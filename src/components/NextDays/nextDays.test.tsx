import { screen, render } from "@testing-library/react-native";

import clearDay from "@assets/clear_day.svg";
import { NextDays } from "@components/NextDays";

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "10/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "11/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("10/07")).toBeTruthy();
  });
});
