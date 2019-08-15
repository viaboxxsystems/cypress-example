import {Position} from './position';

export class Volume extends Position {

  internalId: number;

  barcode: string;
  barcodeScanTime: number;

  status: string;
  transportationStatus: string;

}
