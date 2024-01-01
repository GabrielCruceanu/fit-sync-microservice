export default class UserModel {
  id: string;
  name: string;

  constructor(props: UserModel) {
    this.id = props.id;
    this.name = props.name;
  }
}
