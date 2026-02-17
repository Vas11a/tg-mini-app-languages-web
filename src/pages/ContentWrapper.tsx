import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IPage } from "../types/general.types";
import { pages } from "../config/pages.config";
import {
  pagesAnimation,
  pagesTransition,
} from "../config/framer-motion.config";

interface Props {
  page: IPage;
  setPage: (page: IPage) => void;
}

const ContentWrapper: React.FC<Props> = ({ page, setPage }) => {
  const PageComponent = pages[page];

  return (
    <div className="flex-1 relative overflow-hidden  mb-5 border-b border-primary/30">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={pagesAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pagesTransition}
          className="absolute w-full flex flex-col overflow-hidden inset-0"
        >
          <PageComponent setPage={setPage} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentWrapper;
