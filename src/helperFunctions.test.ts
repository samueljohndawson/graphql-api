import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { csvToObjects, removeObjectFromCsv } from "./helperFunctions";
import { writeObjectToCsv } from "./helperFunctions";
import * as fs from "fs";

// Mock the fs module
jest.mock("fs");

describe("csvToObjects", () => {
  beforeEach(() => {
    // Clear mocks
    (fs.readFileSync as jest.Mock).mockClear();
  });

  it("parses a CSV to a list of objects. Each object's keys are the values in the first line of the csv.", () => {
    // Given
    const csvData = `colour,make,model,price,vin\nRed,Ford,Fiesta,10000,WVGCV7AX7AW000784\nGreen,Mitsubishi,Eclipse,35000,5TBRV54138S478794\nBlue,BMW,4 Series,22000,SALSH23447A102751\nBlack,Jaguar,XE,43000,1G6DP567X50115827\nWhite,Landrover,Evoque,52000,1C6RR6LT9DS578427`;
    (fs.readFileSync as jest.Mock).mockReturnValue(csvData);

    // When
    const result = csvToObjects("test.csv");
    const expected = [
      {
        colour: "Red",
        make: "Ford",
        model: "Fiesta",
        price: "10000",
        vin: "WVGCV7AX7AW000784",
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
        vin: "SALSH23447A102751",
      },
      {
        colour: "Black",
        make: "Jaguar",
        model: "XE",
        price: "43000",
        vin: "1G6DP567X50115827",
      },
      {
        colour: "White",
        make: "Landrover",
        model: "Evoque",
        price: "52000",
        vin: "1C6RR6LT9DS578427",
      },
    ];

    // Then
    expect(result).toEqual(expected);
  });
});

describe("writeObjectToCsv", () => {
  beforeEach(() => {
    // Clear mocks
    (fs.appendFileSync as jest.Mock).mockClear();
  });

  it("should append a new object to a CSV file", () => {
    // Given
    const obj = { id: 1, name: "John", age: 25 };
    const fileName = "test.csv";

    // When
    writeObjectToCsv(obj, fileName);

    // Then
    expect(fs.appendFileSync).toHaveBeenCalledTimes(6);
    expect(fs.appendFileSync).toHaveBeenNthCalledWith(
      1,
      `./data/csv/${fileName}`,
      "\n"
    );
    expect(fs.appendFileSync).toHaveBeenNthCalledWith(
      2,
      `./data/csv/${fileName}`,
      `${obj.id}`
    );
    expect(fs.appendFileSync).toHaveBeenNthCalledWith(
      3,
      `./data/csv/${fileName}`,
      ","
    );
    expect(fs.appendFileSync).toHaveBeenNthCalledWith(
      4,
      `./data/csv/${fileName}`,
      `${obj.name}`
    );
    expect(fs.appendFileSync).toHaveBeenNthCalledWith(
      5,
      `./data/csv/${fileName}`,
      ","
    );
    expect(fs.appendFileSync).toHaveBeenNthCalledWith(
      6,
      `./data/csv/${fileName}`,
      `${obj.age}`
    );
  });
});

describe("removeObjectFromCsv", () => {
  let csvContents: string;
  beforeEach(() => {
    csvContents = "id,name,age\n1,John,25\n2,Jane,30\n3,Sam,28";

    // Clear mocks
    (fs.readFileSync as jest.Mock).mockClear();
    (fs.writeFileSync as jest.Mock).mockClear();
  });

  it("should remove the object with the given id from the CSV file", () => {
    // Given
    (fs.readFileSync as jest.Mock).mockReturnValue(csvContents);

    // When
    removeObjectFromCsv("test.csv", "id", "2");

    // Then
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./data/csv/test.csv",
      "id,name,age\n1,John,25\n3,Sam,28"
    );
  });

  it("should not change the CSV contents if the id is not found in the file", () => {
    // Given
    (fs.readFileSync as jest.Mock).mockReturnValue(csvContents);

    // When
    removeObjectFromCsv("test.csv", "id", "4");

    // Then
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./data/csv/test.csv",
      csvContents
    );
  });

  it("should handle cases where the CSV file is empty", () => {
    // Given
    (fs.readFileSync as jest.Mock).mockReturnValue("");
    const consoleErrorSpy = jest.spyOn(console, "error");

    // When
    removeObjectFromCsv("test.csv", "id", "1");

    // Then
    expect(consoleErrorSpy).toHaveBeenCalledWith("CSV file is empty.");
  });
});
