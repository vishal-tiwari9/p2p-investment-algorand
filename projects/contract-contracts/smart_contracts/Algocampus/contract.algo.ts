import {
  Contract,
  BoxMap,
  GlobalState,
  u64,
  PayTxn,
  Txn,
  assert,
  method,
} from '@algorandfoundation/algorand-typescript';

/** * ULTIMATE FIX: Agar 'Address' import nahi ho raha, 
 * toh 'Txn.sender' ka type dynamicly use karo.
 * Ye 100% work karega kyunki ye internal inference hai.
 */
type AccountAddr = typeof Txn.sender;

interface EventMetadata {
  admin: AccountAddr;
  fee: u64;
  metadataCID: string;
}

export class AlgoCampus extends Contract {
  // Global State for Event ID Counter
  totalEvents = GlobalState<u64>({ initialValue: u64(0) });

  // Storage using the Dynamic Type
  events = BoxMap<u64, EventMetadata>({ keyPrefix: 'e' });

  @method()
  createEvent(fee: u64, metadataCID: string): u64 {
    const eventId = this.totalEvents.value + u64(1);
    this.totalEvents.value = eventId;

    this.events(eventId).value = {
      admin: Txn.sender,
      fee: fee,
      metadataCID: metadataCID,
    };

    return eventId;
  }
}