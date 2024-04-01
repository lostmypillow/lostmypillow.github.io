import { StyledButton } from "./layout";


export default function Home() {
  return (
    <div className="flex flex-row gap-6">
      <StyledButton path={"/about"}>About Me</StyledButton>
      <StyledButton path={"/projects"}>My Projects</StyledButton>
    </div>
  );
}
