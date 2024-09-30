import { describe, expect, it } from "@jest/globals";
import csvToObjects from "./helperFunctions";

describe("csvToObjects", () => {
  it("parses a CSV to a list of objects. Each object's keys are the values in the first line of the csv.", () => {
    const expected = [
      {
        colour: "Red",
        make: "Ford",
        model: "Fiesta",
        price: "10000",
        vin: "WVGCV7AX7AW000784 ",
      },
      {
        colour: "Green",
        make: "Mitsubishi",
        model: "Eclipse",
        price: "35000",
        vin: "5TBRV54138S478794",
      },
      {
        colour: "Blue",
        make: "BMW",
        model: "4 Series",
        price: "22000",
        vin: "SALSH23447A102751 ",
      },
      {
        colour: "Black",
        make: "Jaguar",
        model: "XE",
        price: "43000",
        vin: "1G6DP567X50115827 ",
      },
      {
        colour: "White",
        make: "Landrover",
        model: "Evoque",
        price: "52000",
        vin: "1C6RR6LT9DS578427 ",
      },
    ];
    expect(csvToObjects("/testData/testProduct.csv")).toEqual(expected);
  });
});
