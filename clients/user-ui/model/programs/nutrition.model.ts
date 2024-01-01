import RecipeModel from '#/model/programs/recipe.model';

export default class NutritionModel {
  id: string;
  photo: string;
  name: string;
  type: string;
  category: string;
  kCal: string;
  description: string;
  daysToDo: {
    dayOne: {
      name: string;
      recipes: RecipeModel[];
    };
    dayTwo: {
      name: string;
      recipes: RecipeModel[];
    };
    dayThree: {
      name: string;
      recipes: RecipeModel[];
    };
    dayFour: {
      name: string;
      recipes: RecipeModel[];
    };
    dayFive: {
      name: string;
      recipes: RecipeModel[];
    };
    daySix: {
      name: string;
      recipes: RecipeModel[];
    };
    daySeven: {
      name: string;
      recipes: RecipeModel[];
    };
  };

  constructor(props: NutritionModel) {
    this.id = props.id;
    this.photo = props.photo;
    this.name = props.name;
    this.type = props.type;
    this.category = props.category;
    this.description = props.description;
    this.kCal = props.kCal;
    this.daysToDo = props.daysToDo;
  }
}
