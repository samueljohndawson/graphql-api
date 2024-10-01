import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { ProductObject } from "./ProductObject";

describe("ProductObject", () => {
  let productObject: ProductObject;

  beforeEach(() => {
    productObject = new ProductObject();
  });

  it("should call the read method of its repository when getProducts is called", () => {
    // Given
    const readSpy = jest.spyOn(productObject.repository, "read");

    // When
    productObject.getProducts();

    // Then
    expect(readSpy).toHaveBeenCalled();
  });
});
