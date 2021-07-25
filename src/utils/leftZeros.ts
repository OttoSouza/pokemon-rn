export function leftZeros(num: any, targetLength: number): string {
  return num.toString().padStart(targetLength, 0);
}

export function randomColors(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}