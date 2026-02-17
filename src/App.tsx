import { useState } from "react";
import NavigationModule from "./modules/navigation/NavigationModule";
import type { IPage } from "./types/general.types";
import ContentWrapper from "./pages/ContentWrapper";

function App() {
  const [page, setPage] = useState<IPage>("home");

  return (
    <div className="p-4 bg-primary/6 min-h-dvh flex flex-col justify-between gap-4 m-auto max-w-150">
      <ContentWrapper page={page} setPage={setPage} />
      <NavigationModule page={page} setPage={setPage} />
    </div>
  );
}

export default App;
