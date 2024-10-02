import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { ProductObject } from "./ProductObject";

describe("ProductObject", () => {
  let productObject: ProductObject;
  let newData: any;

  beforeEach(() => {
    productObject = new ProductObject();
    jest.clearAllMocks();
    newData = {
      key1: "new_value1",
      key2: "new_value2",
      key3: "new_value3",
    };
  });

  it("should call the read method of its repository when getAll is called", () => {
    // Given
    const readSpy = jest.spyOn(productObject.getRepository(), "read");

    // When
    productObject.getAll();

    // Then
    expect(readSpy).toHaveBeenCalled();
  });

  it("should call the write method of its repository when add is called", () => {
    // Given
    const readSpy = jest.spyOn(productObject.getRepository(), "write");
    readSpy.mockReturnValue(newData);

    // When
    productObject.add(newData);

    // Then
    expect(readSpy).toHaveBeenCalledWith(newData);
  });
});
