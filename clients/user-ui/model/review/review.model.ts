import BirthModel from '#/model/user/birth.model';

export default class ReviewModel {
  beneficiaryId: string;
  clientId: string;
  clientFirstName: string;
  clientLastName: string;
  clientPhoto: string;
  date: BirthModel;
  stars: number;
  description: string;

  constructor(props: ReviewModel) {
    this.beneficiaryId = props.beneficiaryId;
    this.clientId = props.clientId;
    this.clientFirstName = props.clientFirstName;
    this.clientLastName = props.clientLastName;
    this.clientPhoto = props.clientId;
    this.date = props.date;
    this.stars = props.stars;
    this.description = props.description;
    this.beneficiaryId = props.beneficiaryId;
  }
}
