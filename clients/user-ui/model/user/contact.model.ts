export default class ContactModel {
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  instagram?: string | null;

  constructor(props: ContactModel) {
    this.phone = props.phone;
    this.email = props.email;
    this.website = props.website;
    this.facebook = props.facebook;
    this.twitter = props.twitter;
    this.instagram = props.instagram;
  }
}
