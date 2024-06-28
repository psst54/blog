import { Link } from "@remix-run/react";

export default function Logo() {
  return (
    <Link to="/" css={container}>
      <img src="/profile.webp" alt="logo" css={image} />
      <p css={text}>PSST54</p>
    </Link>
  );
}

const container = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  textDecoration: "none",
};
const image = { width: "2.5rem", height: "2.5rem", borderRadius: "100%" };
const text = { fontSize: "1.25rem", fontWeight: 900 };
