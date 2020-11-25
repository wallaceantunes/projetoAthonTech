export interface GetWeaponsResponse {
    data: Array<{
        id_weapon: number;
        tx_model: string;
        tx_weapon_type: string;
    }>;
  }
