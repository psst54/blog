import { css } from "@emotion/react";
import { color } from "@styles/color";

export const globalStyleCss = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${color.text.standard};

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
      height: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${color.border.light};
      width: 10px;
      height: 10px;
      border-radius: 10px;
    }
  }
`;
