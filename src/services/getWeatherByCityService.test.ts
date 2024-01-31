import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { getWeatherByCityService } from "./getWeatherByCityService";
import { api } from "./api";

describe("Service: getWeatherByCityService", () => {
  it("should be return weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 123,
    });

    expect(response).toHaveProperty("today");
  });
});
