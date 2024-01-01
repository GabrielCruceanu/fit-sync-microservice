export default class GalleryImageModel {
  src: string;
  alt: string;

  constructor(props: GalleryImageModel) {
    this.src = props.src;
    this.alt = props.alt;
  }
}
