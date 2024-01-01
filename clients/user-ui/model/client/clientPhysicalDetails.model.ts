import BirthModel from '#/model/user/birth.model';

export default class ClientPhysicalDetailsModel {
  clientId: string;
  id: string;
  date: BirthModel;
  weight: string;
  height: string;
  head: string;
  shoulders: string;
  chest: string;
  armLeft: string;
  armRight: string;
  waist: string;
  highHip: string;
  hip: string;
  waistToKnee: string;
  knee: string;
  ankle: string;
  clientGalleryFront: string;
  clientGallerySide: string;
  clientGalleryBack: string;

  constructor(props: ClientPhysicalDetailsModel) {
    this.clientId = props.clientId;
    this.id = props.id;
    this.date = props.date;
    this.weight = props.weight;
    this.height = props.height;
    this.head = props.head;
    this.shoulders = props.shoulders;
    this.chest = props.chest;
    this.armLeft = props.armLeft;
    this.armRight = props.armRight;
    this.waist = props.waist;
    this.highHip = props.highHip;
    this.hip = props.hip;
    this.waistToKnee = props.waistToKnee;
    this.knee = props.knee;
    this.ankle = props.ankle;
    this.clientGalleryFront = props.clientGalleryFront;
    this.clientGallerySide = props.clientGallerySide;
    this.clientGalleryBack = props.clientGalleryBack;
  }
}
