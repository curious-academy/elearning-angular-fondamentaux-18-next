import { VideoGame } from "../../../../features/video-games/models/video-game";

export interface GameSession {
  videoGame: VideoGame
  beginDate: Date
  endDate: Date
  players: Friend[]
  status: 'pending' | 'in-progress' | 'completed'
}

export interface Friend {
  id: number
  name: string
}

export type VideoGameDto = {
  id: number
  name: string
}
