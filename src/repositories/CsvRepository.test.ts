import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import * as fs from "fs";
import { CsvRepository } from "./CsvRepository";

jest.mock("fs");
describe("CsvRepository", () => {
  beforeEach(() => {
    const mockData = "key1,key2,key3\nvalue1,value2,value3";
    (fs.readFileSync as jest.Mock).mockReturnValue(mockData);
  });

  it("reads from product csv when type is product", () => {
    // Given
    const repo = new CsvRepository("product");

    // When
    const result = repo.read();

    // Then
    const expected = [
      {
        key1: "value1",
        key2: "value2",
        key3: "value3",
      },
    ];
    expect(fs.readFileSync).toHaveBeenCalledWith("./data/csv/product.csv", {
      encoding: "utf8",
    });
    expect(result).toStrictEqual(expected);
  });
  it("reads from product csv when type is customer", () => {
    // Given
    const repo = new CsvRepository("customer");

    // When
    const result = repo.read();

    // Then
    expect(fs.readFileSync).toHaveBeenCalledWith("./data/csv/customer.csv", {
      encoding: "utf8",
    });
    const expected = [
      {
        key1: "value1",
        key2: "value2",
        key3: "value3",
      },
    ];
    expect(result).toStrictEqual(expected);
  });
  it("should log an error message when type is not recognized", () => {
    // Given
    const consoleErrorSpy = jest.spyOn(console, "error");
    const csvRepository = new CsvRepository("unknown");

    // When
    csvRepository.read();

    // Then
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "type not recognized: unknown"
    );
  });
});
