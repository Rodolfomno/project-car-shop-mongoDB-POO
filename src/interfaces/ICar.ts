export default interface ICar {
  model: string,
  year: number,
  color: string,  
  status?: boolean,
  buyValue: number,
  seatsQty: number,
  doorsQty?: number,
} 