import { Title, SubTitle, DivideLine } from "./styles";

export default function TagHeader({ tagData }) {
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <h1 css={Title}>{tagData.title}</h1>
      <p css={SubTitle}>{tagData.content.join(" / ")}</p>

      <hr css={DivideLine} />
    </div>
  );
}
