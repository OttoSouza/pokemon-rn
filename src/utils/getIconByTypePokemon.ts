export function getIconByTypePokemon(type: string) {
  let nameIcon: string = "";
  switch (type) {
    case "fire":
      nameIcon = "fire";
      break;
    case "grass":
      nameIcon = "leaf";
      break;
    case "bug":
      nameIcon = "bug";
      break;
    case "normal":
      nameIcon = "";
      break;
    case "water":
      nameIcon = "water";
      break;
    case "poison":
      nameIcon = "skull";
      break;
    case "flying":
      nameIcon = "wind";
      break;
  }
}