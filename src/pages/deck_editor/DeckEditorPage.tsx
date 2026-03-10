import type { IPage } from "../../types/general.types";
import DeckEditorModule from "../../modules/deck_editor/DeckEditorModule";

interface Props {
  setPage: (page: IPage) => void;
}

const DeckEditorPage = ({ setPage }: Props) => {
  return <DeckEditorModule setPage={setPage} />;
};

export default DeckEditorPage;