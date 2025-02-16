import type { ReactNode } from "react";
import NavBar from "../NavBar";
import { background, contentWrapper } from "./styles";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <main css={background}>
      <NavBar />
      <div css={contentWrapper}>{children}</div>
    </main>
  );
}
