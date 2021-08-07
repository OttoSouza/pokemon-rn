import { colors } from "../global/colors";

export function getAllColorByType(type: string): string[] {
  const getColorByType = Object.entries(colors).filter((item) =>
    item[0] === type ? item[1] : ""
  );
  const getHexColor = getColorByType.map((item) => item[1]);

  return getHexColor;
}
