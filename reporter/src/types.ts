export type IEOSNetwork = {
  chainId: string;
  nodeEndpoint: string;
  protocol: string;
  host: string;
  port: number;
};

// mimicks EOS C++ smart contract microseconds class
type microseconds = {
  _count: number | string;
};

// mimicks EOS C++ smart contract symbol class
export type TAssetSymbol = {
  code: string;
  precision: number;
};

// mimicks EOS C++ smart contract extended_symbol class
export type TExtendedSymbol = {
  symbol: TAssetSymbol;
  contract: string;
};

export type TAsset = {
  amount: number;
  symbol: TAssetSymbol;
};

export type NetworkName = `eos` | `telos` | `wax`;

export function isNetworkName(networkName: string): networkName is NetworkName {
  switch (networkName) {
    case `eos`:
      return true;
    case `telos`:
      return true;
    case `wax`:
      return true;
  }
  return false;
}

export type TChannelRow = {
  channel_name: string;
  remote_contract: string;
  next_transfer_id: number;
  enabled: number;
};

export type TAccountsRow = {
  balance: string;
};

export type TTransfersRow = {
  id: number|string; // 4;
  transaction_id: string; // "5910cc316d55554ea6909888814fdf826b3589a0893ab2cb96019e4cdd1bfc09";
  from_blockchain: string; // "telos";
  to_blockchain: string; // "eos";
  from_account: string; // "fuzzytestnet";
  to_account: string; // "fuzzytestnet";
  quantity: string; // "2.0000 START";
  memo: string; // "Ui from telos to eos"
  transaction_time: string; // "2021-04-28T14:40:38";
  expires_at: string; // "2021-05-05T14:40:38";
  is_refund: number; // 0;
};

export type TTransfersRowTransformed = Omit<TTransfersRow, "id" | "is_refund"> & {
  id: number;
  is_refund: boolean;
  transactionDate: Date;
  expiresAtDate: Date;
};

export type TReportsRow = {
  id: number|string; // 0,
  transfer: TTransfersRow
  confirmed: number; // 0,
  confirmed_by: string[]; // [ 'r1.start' ],
  executed: number; // 0,
  failed: number; // 0,
  failed_by: string[]; // []
}
export type TReportsRowTransformed = Omit<TReportsRow, "id"> & {
  id: number;
};

export function exhaustiveCheck(x: never) {
  throw new Error("exhaustiveCheck: should not reach here");
}

export type ArgsType<T> = T extends (...args: infer U) => any ? U : never;
