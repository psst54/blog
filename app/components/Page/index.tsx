import { background, contentWrapper } from "./styles";

export default function Page({ navbar, body }) {
  return (
    <main css={background}>
      {navbar}
      <div css={contentWrapper}>{body}</div>
    </main>
  );
}
