export default class UserImageModel {
  downloadURL: string;
  path: string;

  constructor(props: UserImageModel) {
    this.downloadURL = props.downloadURL;
    this.path = props.path;
  }
}
