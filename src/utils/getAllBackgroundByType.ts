import {backgroundColors} from "../global/colors"


export function getAllBackgroundByTypes(types: string[]) {
  const getType = types.map((item) => item);
  const getColorByType = Object.entries(backgroundColors).filter((item) =>
    item[0] === getType[0] ? item[1] : ""
  );

  const getHexColor = getColorByType.map((item) => item[1]);

  return getHexColor;
}
