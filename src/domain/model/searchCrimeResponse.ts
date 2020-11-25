export interface SearchCrimeResponse {
    data: {
      country: string;
      crime_date: Date;
      weapons_crime: Array<{
        weapon: string;
        weapon_type: string;
      }>;
      criminal_crime_types: Array<{
        criminal: string;
        crime_type: string;
      }>;
      victims_crime: Array<{
        victim: string;
      }>;
    };
  }
