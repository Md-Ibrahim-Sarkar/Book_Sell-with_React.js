export default function getUpperCase(text) {
  return text.toUpperCase();

}

export default function bookImages(source, imageName) {
  return new URL(source, imageName).href;
}