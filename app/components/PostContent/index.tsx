export default function Content({ content }: { content: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      css={{
        h1: {
          padding: "1rem 0 0.2rem 0",
        },
        h2: {
          padding: "1rem 0 0.2rem 0",
        },
        h3: {
          padding: "0.8rem 0 0.2rem 0",
        },
        p: {
          lineHeight: "1.4rem",
        },
        a: {
          color: "blue",
          textDecoration: "underline",
          padding: "0.3rem 0",
          lineHeight: "1.4rem",
        },
        code: {
          padding: "0 0.2rem",
          borderRadius: "0.3rem",
          background: "#70E3E366",

          fontFamily: "Pretendard",
          fontWeight: 500,
        },
        li: {
          marginLeft: "1.5rem",
          lineHeight: "1.4rem",
          padding: "0.2rem 0",
        },
        ol: {
          padding: "0.2rem 0",
        },
        ul: {
          padding: "0.2rem 0",
        },
        blockquote: {
          borderLeft: "3px solid black",
          margin: "0.5rem 0",
          padding: "0 1rem",
          lineHeight: "1.4rem",
        },
        em: {
          marginRight: "0.1rem",
          fontFamily: "KaTeX_Main",
          fontSize: "1.2rem",
        },

        pre: { background: "#2e3440", padding: "1rem", borderRadius: "0.5rem" },
        ".sourceCode": {
          color: "#ffffff",
          lineHeight: "1.4rem",
          code: {
            padding: 0,
            borderRadius: 0,
            background: "transparent",
            fontWeight: 400,
          },

          ".al": { color: "#ffffff" } /* Alert */,
          ".an": { color: "#ffffff" } /* Annotation */,
          ".at": { color: "#ffffff" } /* Attribute */,
          ".bn": { color: "#ffffff" } /* BaseN */,
          ".cf": { color: "#81a1c1" } /* ControlFlow */,
          ".ch": { color: "#ffffff" } /* Char */,
          ".cn": { color: "#ffffff" } /* Constant */,
          ".co": { color: "#636f88", fontStyle: "italic" } /* Comment */,
          ".cv": {
            color: "#ffffff",
            fontWeight: "bold",
            fontStyle: "italic",
          } /* CommentVar */,
          ".do": {
            color: "#ffffff",
            fontWeight: "bold",
            fontStyle: "italic",
          } /* Documentation */,
          ".dt": { color: "#81a1c1" } /* DataType */,
          ".dv": { color: "#b48ead" } /* DecVal */,
          ".er": { color: "#ffffff" } /* Error */,
          ".ex": {} /* Extension */,
          ".fl": { color: "#ffffff" } /* Float */,
          ".fu": { color: "#ffffff", fontWeight: "bold" } /* Function */,
          ".im": { color: "#a3be8c" } /* Import */,
          ".in": {
            color: "#ffffff",
            fontWeight: "bold",
            fontStyle: "italic",
          } /* Information */,
          ".kw": { color: "#81a1c1" } /* Keyword */,
          ".op": { color: "#81a1c1" } /* Operator */,
          ".ot": { color: "#ffffff" } /* Other */,
          ".pp": { color: "#81a1c1" } /* Preprocessor */,
          ".sc": { color: "#ffffff", fontWeight: "bold" } /* SpecialChar */,
          ".ss": { color: "#ffffff" } /* SpecialString */,
          ".st": { color: "#ffffff" } /* String */,
          ".va": { color: "#ffffff" } /* Variable */,
          ".vs": { color: "#ffffff" } /* VerbatimString */,
          ".wa": {
            color: "#ffffff",
            fontWeight: "bold",
            fontStyle: "italic",
          } /* Warning */,
        },
      }}
    />
  );
}
