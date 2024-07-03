import { COLOR } from "@constants/color";

const tableWrapperStyle = {
  width: "fit-content",
  margin: "1rem",

  border: `2px solid ${COLOR.BORDER.STANDARD}`,
  borderRadius: "1rem",
  boxShadow: `6px 6px 0px 0px ${COLOR.SECONDARY.STANDARD}`,

  wordBreak: "keep-all" as const,
};
const tableStyle = {
  borderStyle: "hidden",
  borderCollapse: "collapse" as const,
};

export function Table({ children }) {
  return (
    <div css={tableWrapperStyle}>
      <table css={tableStyle} children={children} />
    </div>
  );
}

const tableHeaderStyle = {};

export function THead({ children }) {
  return <thead css={tableHeaderStyle} children={children} />;
}

const tableBodyStyle = {};

export function TBody({ children }) {
  return <tbody css={tableBodyStyle} children={children} />;
}

const tableCellStyle = {
  border: `1px solid ${COLOR.BORDER.LIGHT}`,
  padding: "0.25rem 0.75rem",
};

export function Td({ children }) {
  return <td css={tableCellStyle} children={children} />;
}

const headerCellStyle = {
  border: `1px solid ${COLOR.BORDER.LIGHT}`,
  padding: "0.25rem 0.75rem",
};

export function Th({ children }) {
  return <th css={headerCellStyle} children={children} />;
}
