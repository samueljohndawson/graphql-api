import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { CustomerObject } from "./CustomerObject";

describe("CustomerObject", () => {
  let customerObject: CustomerObject;
  let newData: any;

  beforeEach(() => {
    customerObject = new CustomerObject();
    jest.clearAllMocks();
    newData = {
      key1: "new_value1",
      key2: "new_value2",
      key3: "new_value3",
    };
  });

  it("should call the read method of its repository when getAll is called", () => {
    // Given
    const readSpy = jest.spyOn(customerObject.repository, "read");

    // When
    customerObject.getAll();

    // Then
    expect(readSpy).toHaveBeenCalled();
  });

  it("should call the write method of its repository when add is called", () => {
    // Given
    const readSpy = jest.spyOn(customerObject.repository, "write");
    readSpy.mockReturnValue(newData);

    // When
    customerObject.add(newData);

    // Then
    expect(readSpy).toHaveBeenCalledWith(newData);
  });
});
