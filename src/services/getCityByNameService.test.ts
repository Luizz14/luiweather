import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { getCityByNameService } from "./getCityByNameService";
import { api } from "./api";

describe("API: getCityByNameService", () => {
  it("should return an array of cities", async () => {
    jest
      .spyOn(api, "get")
      .mockReturnValue(Promise.resolve({ data: mockCityAPIResponse }));
    const response = await getCityByNameService("São Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
