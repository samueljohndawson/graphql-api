import * as fs from "fs";
import * as path from "path";

/**
 * csvToJson
 * @param  {string} fileName - the name of the file (including extension) contained in the data/csv directory
 */
const csvToObjects = (fileName: string) => {
  const filePath = path.resolve(`./data/csv/${fileName}`);
  const text = fs.readFileSync(filePath, { encoding: "utf8" });
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

export default csvToObjects;
