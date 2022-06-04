export interface Model<T> {
  create(obj: T): Promise<T | null>;
  read(): Promise<T[] | null>;
  readOne(id: string): Promise<T | null>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<T | null>; 
}