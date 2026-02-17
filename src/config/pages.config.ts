import HomePage from "../pages/home/HomePage";
import GamePage from "../pages/game/GamePage";
import ProfilePage from "../pages/profile/ProfilePage";
import DeckEditorPage from "../pages/deck_editor/DeckEditorPage";
import type { IPage } from "../types/general.types";

export const pages: Record<IPage, any> = {
  home: HomePage,
  deck_editor: DeckEditorPage,
  profile: ProfilePage,
  game: GamePage,
};
