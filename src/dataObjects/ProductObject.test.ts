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
    const spy = jest.spyOn(productObject.getRepository(), "read");

    // When
    productObject.getAll();

    // Then
    expect(spy).toHaveBeenCalled();
  });

  it("should call the write method of its repository when add is called", () => {
    // Given
    const spy = jest.spyOn(productObject.getRepository(), "write");
    spy.mockReturnValue(newData);

    // When
    productObject.add(newData);

    // Then
    expect(spy).toHaveBeenCalledWith(newData);
  });

  it("should call the remove method of its repository when remove is called", () => {
    // Given
    const spy = jest.spyOn(productObject.getRepository(), "remove");
    spy.mockReturnValue(newData);

    // When
    productObject.remove(newData);

    // Then
    expect(spy).toHaveBeenCalledWith(newData);
  });
});
