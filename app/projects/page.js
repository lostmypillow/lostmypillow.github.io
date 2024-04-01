import React from "react";
import Link from "next/link";
import { StyledButton } from "../layout";
export default function page() {
  return (
    <>
      <StyledButton path={"https://lostmypillow.github.io/SensibleMovies"}
      >
        SensibleMovies
      </StyledButton>
      <StyledButton path={"https://lostmypillow.github.io/SensibleSearch"}
      >
        SensibleSearch
      </StyledButton>
    </>
  );
}
