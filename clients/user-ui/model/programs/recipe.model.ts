export default class RecipeModel {
  id: string;
  photo?: string;
  video?: string;
  name: string;
  category: string;
  kCal: string;
  proteins: string;
  carbohydrate: string;
  fats: string;
  ingredients: string[];
  modeOfExecution: string[];

  constructor(props: RecipeModel) {
    this.id = props.id;
    this.photo = props.photo;
    this.video = props.video;
    this.name = props.name;
    this.category = props.category;
    this.kCal = props.kCal;
    this.proteins = props.proteins;
    this.carbohydrate = props.carbohydrate;
    this.fats = props.fats;
    this.ingredients = props.ingredients;
    this.modeOfExecution = props.modeOfExecution;
  }
}
