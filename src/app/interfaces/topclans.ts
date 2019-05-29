export interface TopClanes {
    tag?: string;
    name?: string;
    score?: number;
    memberCount?: number;
    rank?: number;
    previousRank?: number;
    badge?: Badge;
    location?: Location;
  }

export interface Location {
    name?: string;
    isCountry?: boolean;
    code?: string;
  }

export interface Badge {
    name?: string;
    category?: string;
    id?: number;
    image?: string;
  }
