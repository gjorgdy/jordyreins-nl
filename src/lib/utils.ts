export function toTitleCase(str: string) {
  return str.replaceAll('-', ' ').toLowerCase().split(' ').map((word: string) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
