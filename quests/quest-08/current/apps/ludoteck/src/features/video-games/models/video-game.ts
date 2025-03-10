/**
 * Represente un jeu video dans le projet
 */
export interface VideoGame {
  id?: number;
  label: string;
  year: number;
}

export type VideoGames = VideoGame[];
