import * as fs from "fs";

/**
 * Reads a CSV file and converts it into an array of objects.
 * @param  {string} fileName - the name of the file (including extension) contained in the data/csv directory
 */
export const csvToObjects = (fileName: string) => {
  const text = fs.readFileSync(`./data/csv/${fileName}`, { encoding: "utf8" });
  const rows = text.split("\n");
  const headers = rows[0].split(",");
  let object = {};

  let objects: any[] = [];
  rows.map((row, index) => {
    if (index != 0) {
      const values = row.split(",");
      headers.map((header, headerIndex) => {
        object = {
          ...object,
          [header]: values[headerIndex],
        };
      });

      objects.push(object);
    }
  });
  return objects;
};

/**
 * Appends a new object to a CSV file
 * @param  {object} obj - The object to be appended to the CSV file
 * @param  {string} fileName - The name of the file (including extension) contained in the data/csv directory
 */
export const writeObjectToCsv = (obj: any, fileName: string) => {
  const filePath = `./data/csv/${fileName}`;
  fs.appendFileSync(filePath, "\n");
  Object.entries(obj).forEach(([key, _value], index) => {
    fs.appendFileSync(filePath, `${obj[key]}`);
    if (index < Object.keys(obj).length - 1) {
      fs.appendFileSync(filePath, ",");
    }
  });
};

/**
 * Removes an entry from a CSV file
 * @param  {string} fileName - The name of the file (including extension) contained in the data/csv directory
 * @param  {object} key - The key on which the entry should be removed
 * @param  {string} id - The id of the entry to be removed
 *
 */
export const removeObjectFromCsv = (
  fileName: string,
  key: "vin" | "email",
  id: string
) => {
  const filePath = `./data/csv/${fileName}`;
  const text = fs.readFileSync(filePath, { encoding: "utf8" });
  if (text === "") {
    console.error("CSV file is empty.");
    return;
  }
  const rows = text.split("\n");
  const headerRow = rows[0].split(",");
  const idIndex = headerRow.indexOf(key);
  const updatedRows = rows.filter((row) => {
    const rowValues = row.split(",");
    return rowValues[idIndex].trim() !== id.trim();
  });
  fs.writeFileSync(filePath, updatedRows.join("\n"));
};
