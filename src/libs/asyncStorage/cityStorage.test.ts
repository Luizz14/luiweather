import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "1",
  name: "São Paulo",
  latitude: 173,
  longitude: 173,
};

describe("Storage: CityStorage", () => {
  it("should be return null when don't have city storaged", async () => {
    const response = await getStorageCity();

    console.log(response);
  });

  it("should be return city storaged", async () => {
    await saveStorageCity(newCity);

    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storage.", async () => {
    await saveStorageCity(newCity);

    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
