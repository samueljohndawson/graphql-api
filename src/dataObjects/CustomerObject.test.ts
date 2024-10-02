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
    const spy = jest.spyOn(customerObject.getRepository(), "read");

    // When
    customerObject.getAll();

    // Then
    expect(spy).toHaveBeenCalled();
  });

  it("should call the write method of its repository when add is called", () => {
    // Given
    const spy = jest.spyOn(customerObject.getRepository(), "write");
    spy.mockReturnValue(newData);

    // When
    customerObject.add(newData);

    // Then
    expect(spy).toHaveBeenCalledWith(newData);
  });
  it("should call the remove method of its repository when remove is called", () => {
    // Given
    const spy = jest.spyOn(customerObject.getRepository(), "remove");
    spy.mockReturnValue(newData);

    // When
    customerObject.remove(newData);

    // Then
    expect(spy).toHaveBeenCalledWith(newData);
  });
});
