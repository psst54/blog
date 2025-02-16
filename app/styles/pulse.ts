import { keyframes } from "@emotion/react";
import { COLOR } from "~/constants/color";

const backgroundKeyframe = keyframes`
0% {
    background-color: ${COLOR.PRIMARY.LIGHT};
}
50% {
    background-color: ${COLOR.PRIMARY.VERY_LIGHT};
}
100% {
    background-color: ${COLOR.PRIMARY.LIGHT};
}`;

const borderKeyframe = keyframes`
0% {
    border-color: ${COLOR.PRIMARY.LIGHT};
}
50% {
    border-color: ${COLOR.PRIMARY.VERY_LIGHT};
}
100% {
    border-color: ${COLOR.PRIMARY.LIGHT};
}`;

export const backgroundPulse = {
  animation: `${backgroundKeyframe} 2s infinite`,
};

export const borderPulse = {
  animation: `${borderKeyframe} 2s infinite`,
};
