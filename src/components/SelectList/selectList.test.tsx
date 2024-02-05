import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Campinas",
        latitude: -22.90556,
        longitude: -47.06083,
      },
      {
        id: "2",
        name: "São Paulo",
        latitude: -23.5475,
        longitude: -46.63611,
      },
      {
        id: "3",
        name: "Rio de Janeiro",
        latitude: -22.90278,
        longitude: -43.2075,
      },
      {
        id: "4",
        name: "Belo Horizonte",
        latitude: -19.92083,
        longitude: -43.93778,
      },
      {
        id: "5",
        name: "Salvador",
        latitude: -12.97111,
        longitude: -38.51083,
      },
      {
        id: "6",
        name: "Brasília",
        latitude: -15.77972,
        longitude: -47.92972,
      },
      {
        id: "7",
        name: "Fortaleza",
        latitude: -3.71722,
        longitude: -38.54306,
      },
      {
        id: "8",
        name: "Curitiba",
        latitude: -25.42778,
        longitude: -49.27306,
      },
      {
        id: "9",
        name: "Manaus",
        latitude: -3.10194,
        longitude: -60.025,
      },
      {
        id: "10",
        name: "Recife",
        latitude: -8.05389,
        longitude: -34.88111,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText("manaus", { exact: false });
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledTimes(1);
    // expect(onPress).toBeCalledWith(data[1]);
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
  });
});
