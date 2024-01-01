import { GenderType, UserType } from '#/constants/user';
import ClientPhysicalDetailsModel from '#/model/client/clientPhysicalDetails.model';
import BirthModel from '#/model/user/birth.model';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import ReviewModel from '#/model/review/review.model';
import ProgramsModel from '#/model/programs/programs.model';

export default class ClientProfileModel {
  id: string;
  username: string;
  status: UserType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: GenderType;
  country: string;
  state: string;
  city: string;
  hasPremium: boolean;
  birth: BirthModel;
  joined: BirthModel;
  coverPicture?: string;
  profilePicture?: string;
  physicalDetails?: ClientPhysicalDetailsModel[];
  nutritionist?: TrainerProfileModel;
  trainer?: TrainerProfileModel;
  gym?: TrainerProfileModel;
  reviews?: ReviewModel;
  program?: ProgramsModel;

  constructor(props: ClientProfileModel) {
    this.id = props.id;
    this.username = props.username;
    this.status = props.status;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.email = props.email;
    this.phone = props.phone;
    this.gender = props.gender;
    this.country = props.country;
    this.state = props.state;
    this.city = props.city;
    this.hasPremium = props.hasPremium;
    this.birth = props.birth;
    this.joined = props.joined;
    this.coverPicture = props.coverPicture;
    this.profilePicture = props.profilePicture;
    this.physicalDetails = props.physicalDetails;
    this.nutritionist = props.nutritionist;
    this.trainer = props.trainer;
    this.gym = props.gym;
    this.reviews = props.reviews;
    this.program = props.program;
  }
}
