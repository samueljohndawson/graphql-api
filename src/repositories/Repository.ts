/**
 * Base class for repositories
 */
export abstract class Repository {
  abstract read(): void;
  abstract write(obj: object): void;
  abstract remove(id: string): void;
}
