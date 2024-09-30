import { describe, expect, it, jest } from "@jest/globals";
import * as fs from "fs";
import { CsvRepository } from "./CsvRepository";

jest.mock("fs");
describe("CsvRepository", () => {
  it("reads from product csv when type is product", () => {
    const mockData = "key1,key2,key3\nvalue1,value2,value3";
    (fs.readFileSync as jest.Mock).mockReturnValue(mockData);

    const repo = new CsvRepository("product");
    const result = repo.read();

    expect(fs.readFileSync).toHaveBeenCalledWith("./data/csv/product.csv", {
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
});
