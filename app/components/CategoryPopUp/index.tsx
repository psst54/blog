import { useState } from "react";
import { useParams } from "@remix-run/react";

import { color } from "@styles/color";
import CategoryList from "@components/CategoryList";

import RightChevronIcon from "@assets/RightChevronIcon";
import ListIcon from "@assets/ListIcon";

export default function CategoroyPopUp({ data, isPostOpen, toggleCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  return (
    <div>
      <button
        aria-label="toggle category menu"
        css={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",

          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <ListIcon size="1.5rem" color="#000" />
      </button>

      {isOpen && (
        <div
          css={[
            {
              position: "fixed",
              width: "90vw",
              maxWidth: "400px",
              height: "100dvh",
              top: 0,
              right: 0,

              display: "flex",
              flexDirection: "column",

              background: color.background.standard,
              borderWidth: "2px 0 2px 2px",
              borderStyle: "solid",
              borderColor: color.border.standard,
              borderRadius: "1rem 0 0 1rem",
              padding: "1.25rem",

              zIndex: 10,
            },
          ]}
        >
          <div css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              aria-label="toggle category menu"
              css={{
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <RightChevronIcon size="1rem" color="#000" />
            </button>
            <h2 css={{ fontSize: "1.25rem", fontWeight: 400 }}>글 목록</h2>
          </div>

          <CategoryList
            data={data}
            isPostOpen={isPostOpen}
            toggleCategory={toggleCategory}
          />
        </div>
      )}
    </div>
  );
}
