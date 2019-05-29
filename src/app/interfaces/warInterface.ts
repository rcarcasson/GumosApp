export interface WarDay {
    state: string;
    warEndTime: number;
    clan: Clan;
    participants: Participant[];
    standings?: Clan[];
  }

  export interface CollectionDay {
    state: string;
    collectionEndTime: number;
    clan: Clan;
    participants: Participant[];
  }

  export interface Participant {
    tag: string;
    name: string;
    cardsEarned: number;
    battlesPlayed: number;
    wins: number;
  }

  export interface Clan {
    tag: string;
    name: string;
    participants: number;
    battlesPlayed: number;
    wins: number;
    crowns: number;
    warTrophies: number;
    badge: Badge;
  }

  export interface Badge {
    name: string;
    category: string;
    id: number;
    image: string;
  }
