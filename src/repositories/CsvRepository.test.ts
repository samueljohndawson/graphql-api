import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { CsvRepository } from "./CsvRepository";
import * as helperFunctions from "../helperFunctions";

jest.mock("../helperFunctions");
describe("CsvRepository", () => {
  let newData: any = {};
  beforeEach(() => {
    jest.clearAllMocks();
    newData = {
      key1: "new_value1",
      key2: "new_value2",
      key3: "new_value3",
    };
    (helperFunctions.csvToObjects as jest.Mock).mockReturnValue(newData);
    (helperFunctions.writeObjectToCsv as jest.Mock).mockReturnValue(newData);
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

  it("reads from product csv when type is product", () => {
    // Given
    const repo = new CsvRepository("product");

    // When
    repo.read();

    // Then
    expect(helperFunctions.csvToObjects).toHaveBeenCalledWith("product.csv");
  });
  it("reads from customer csv when type is customer", () => {
    // Given
    const repo = new CsvRepository("customer");

    // When
    repo.read();

    // Then
    expect(helperFunctions.csvToObjects).toHaveBeenCalledWith("customer.csv");
  });
  it("writes to product csv when type is product", () => {
    // Given
    const repo = new CsvRepository("product");

    // When
    repo.write(newData);

    // Then
    expect(helperFunctions.writeObjectToCsv).toHaveBeenCalledWith(
      newData,
      "product.csv"
    );
  });
  it("writes to customer csv when type is customer", () => {
    // Given
    const repo = new CsvRepository("customer");

    // When
    repo.write(newData);

    // Then
    expect(helperFunctions.writeObjectToCsv).toHaveBeenCalledWith(
      newData,
      "customer.csv"
    );
  });
});
