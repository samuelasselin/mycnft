export interface CollectibleUnitsType {
  quantity: string;
  unit: string;
}

export interface CollectibleType {
  asset: string;
  policy_id: string;
  asset_name: string;
  fingerprint: string;
  quantity: string;
  initial_mint_tx_hash: string;
  mint_or_burn_count: number;
  onchain_metadata: {
    name: string;
    image: string;
    files: [
      {
        src: string;
        name: string;
        mediaType: string;
      }
    ];
    mediaType: string;
    description: string;
  };
  metadata: null;
}
