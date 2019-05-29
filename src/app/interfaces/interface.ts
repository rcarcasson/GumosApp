  export interface InfoClan {
    tag?: string;
    name?: string;
    description?: string;
    type?: string;
    score?: number;
    warTrophies?: number;
    memberCount?: number;
    requiredScore?: number;
    donations?: number;
    badge?: Badge;
    location?: Location;
    members?: Member[];
    tracking?: Tracking;
  }

  export interface Tracking {
    active?: boolean;
    legible?: boolean;
    available?: boolean;
    snapshotCount?: number;
  }

  export interface Member {
    name?: string;
    tag?: string;
    rank?: number;
    previousRank?: number;
    role?: string;
    expLevel?: number;
    trophies?: number;
    donations?: number;
    donationsReceived?: number;
    donationsDelta?: number;
    arena?: Arena;
    donationsPercent?: number;
  }

  export interface Arena {
    name?: string;
    arena?: string;
    arenaID?: number;
    trophyLimit?: number;
  }

  export interface Location {
    name?: string;
    isCountry?: boolean;
    code?: string;
  }

  export interface Badge {
    name: string;
    category: string;
    id: number;
    image: string;
  }

  export interface SiguientesCofres {
    upcoming: string[];
    megaLightning: number;
    magical: number;
    legendary: number;
    epic: number;
    giant: number;
  }
