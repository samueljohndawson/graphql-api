import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { CustomerObject } from "./CustomerObject";

describe("CustomerObject", () => {
  let customerObject: CustomerObject;

  beforeEach(() => {
    customerObject = new CustomerObject();
  });

  it("should call the read method of its repository when getCustomers is called", () => {
    // Given
    const readSpy = jest.spyOn(customerObject.repository, "read");

    // When
    customerObject.getCustomers();

    // Then
    expect(readSpy).toHaveBeenCalled();
  });
});
