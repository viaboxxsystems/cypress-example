import {Position} from './position';

export class Volume extends Position {

  internalId: number;

  barcode: string;
  barcodeScanTime: number;

  volume: number;
  width: number;
  height: number;
  length: number;
  matchProbability: number;

  accuracy: number;

  gateNumber: number;
  forkliftId: number;

  status: string;
  transportationStatus: string;

  updateTimestamp: number;

}
