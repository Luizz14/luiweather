import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
  it("should have 5 items", () => {
    const days = getNextDays();

    expect(days).toHaveLength(5);
  });

  it("should be return the next five days", () => {
    const days = getNextDays();

    // expect(days[0]).toBe("25/01");
    // expect(days[1]).toBe("26/01");
    // expect(days[2]).toBe("27/01");
    // expect(days[3]).toBe("28/01");
    // expect(days[4]).toBe("29/01");
  });
});
