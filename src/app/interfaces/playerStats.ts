export interface PlayerStats {
    tag: string;
    name: string;
    trophies: number;
    rank?: any;
    arena: Arena;
    clan: Clan;
    stats: Stats;
    games: Games;
    leagueStatistics: LeagueStatistics;
    deckLink: string;
    currentDeck: CurrentDeck[];
    cards: CurrentDeck[];
    achievements: Achievement[];
  }

  interface Achievement {
    name: string;
    stars: number;
    value: number;
    target: number;
    info: string;
  }

  interface CurrentDeck {
    name: string;
    id: number;
    level: number;
    starLevel?: number;
    maxLevel: number;
    count: number;
    rarity: string;
    requiredForUpgrade: number | string;
    displayLevel: number;
    minLevel: number;
    icon: string;
    key: string;
    elixir: number;
    type: string;
    arena: number;
    description: string;
    leftToUpgrade?: number;
  }

  interface LeagueStatistics {
    currentSeason: CurrentSeason;
    previousSeason: PreviousSeason;
    bestSeason: BestSeason;
  }

  interface BestSeason {
    id: string;
    trophies: number;
  }

  interface PreviousSeason {
    id: string;
    trophies: number;
    bestTrophies: number;
  }

  interface CurrentSeason {
    trophies: number;
    bestTrophies: number;
  }

  interface Games {
    total: number;
    tournamentGames: number;
    wins: number;
    warDayWins: number;
    winsPercent: number;
    losses: number;
    lossesPercent: number;
    draws: number;
    drawsPercent: number;
  }

  interface Stats {
    clanCardsCollected: number;
    tournamentCardsWon: number;
    maxTrophies: number;
    threeCrownWins: number;
    cardsFound: number;
    favoriteCard: FavoriteCard;
    totalDonations: number;
    challengeMaxWins: number;
    challengeCardsWon: number;
    level: number;
  }

  interface FavoriteCard {
    name: string;
    id: number;
    maxLevel: number;
    minLevel: number;
    icon: string;
    key: string;
    elixir: number;
    type: string;
    rarity: string;
    arena: number;
    description: string;
  }

  interface Clan {
    tag: string;
    name: string;
    role: string;
    donations: number;
    donationsReceived: number;
    donationsDelta: number;
    badge: Badge;
  }

  interface Badge {
    name: string;
    category: string;
    id: number;
    image: string;
  }

  interface Arena {
    name: string;
    arena: string;
    arenaID: number;
    trophyLimit: number;
  }
