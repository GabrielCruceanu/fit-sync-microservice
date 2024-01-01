import { TrainerType } from '#/constants/trainer';
import { GenderType, UserType } from '#/constants/user';
import ClientProfileModel from '#/model/client/clientProfile.model';
import ReviewModel from '#/model/review/review.model';
import BirthModel from '#/model/user/birth.model';
import ContactModel from '#/model/user/contact.model';
import GalleryImageModel from '#/model/user/galleryImage.model';
import ProgramsModel from '#/model/programs/programs.model';

export default class TrainerProfileModel {
  id: string;
  username: string;
  status: UserType.Trainer;
  firstName: string;
  lastName: string;
  type: TrainerType;
  gender: GenderType;
  joined: BirthModel;
  birth: BirthModel;
  hasProPremium: boolean;
  certificate: boolean;
  experience: string;
  country: string;
  state: string;
  city: string;
  contact: ContactModel;
  description: string;
  coverPicture?: string;
  profilePicture?: string;
  completedClients?: ClientProfileModel[];
  activeClients?: ClientProfileModel[];
  gallery?: GalleryImageModel[];
  reviews?: ReviewModel[];
  programs?: ProgramsModel[];

  constructor(props: TrainerProfileModel) {
    this.id = props.id;
    this.username = props.username;
    this.status = props.status;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.type = props.type;
    this.gender = props.gender;
    this.joined = props.joined;
    this.birth = props.birth;
    this.hasProPremium = props.hasProPremium;
    this.certificate = props.certificate;
    this.experience = props.experience;
    this.country = props.country;
    this.state = props.state;
    this.city = props.city;
    this.contact = props.contact;
    this.description = props.description;
    this.coverPicture = props.coverPicture;
    this.profilePicture = props.profilePicture;
    this.completedClients = props.completedClients;
    this.activeClients = props.activeClients;
    this.gallery = props.gallery;
    this.reviews = props.reviews;
    this.programs = props.programs;
  }
}
