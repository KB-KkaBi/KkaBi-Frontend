export function level(id: number) {
  switch (id) {
    case 1:
      return "하";
    case 2:
      return "중";
    case 3:
      return "상";
    case 4:
      return "최상";
    default:
      return;
  }
}
