import { useState } from "react";
import type { IPage } from "../../types/general.types";
import DeckEditorHeader from "./components/DeckEditorHeader";
import DeckNameField from "./components/DeckNameField";
import LanguagesField from "./components/languages_select/LanguagesField";
import LevelField from "./components/LevelField";
import WordsField from "./components/WordsField";

interface Props {
  setPage: (page: IPage) => void;
}

const DeckEditorModule = ({ setPage }: Props) => {
  const [deckName, setDeckName] = useState("");
  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");
  const [level, setLevel] = useState("");
  const [words, setWords] = useState("");

  const handleSave = () => {
    // mock — will be replaced with tanstack query mutation
    console.log({ deckName, fromLang, toLang, level, words });
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden gap-4">
      <DeckEditorHeader
        title={deckName}
        setPage={setPage}
        onSave={handleSave}
      />

      <div className="flex flex-col gap-4 overflow-y-auto flex-1 min-h-0 pb-2 px-0.5">
        <DeckNameField value={deckName} onChange={setDeckName} />
        <LanguagesField
          fromLang={fromLang}
          toLang={toLang}
          onFromChange={setFromLang}
          onToChange={setToLang}
        />
        <LevelField value={level} onChange={setLevel} />
        <WordsField value={words} onChange={setWords} />
      </div>
    </div>
  );
};

export default DeckEditorModule;
