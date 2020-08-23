import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileModal from "./MobileModal";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetIsMenuOpen = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleSetIsMenuOpen={handleSetIsMenuOpen}
      />
      <MobileModal
        handleSetIsMenuOpen={handleSetIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
};

export default MobileNavigation;
