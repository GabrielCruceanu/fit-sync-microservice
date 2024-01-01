import { UserType } from "@/ts/enum";

export type TrainerDetails = {
  active_clients: string | null;
  birth_date: string | null;
  birth_month: string | null;
  birth_year: string | null;
  certificate: boolean | null;
  city: string | null;
  completed_clients: string | null;
  country: string | null;
  description: string | null;
  email: string | null;
  experience: string | null;
  facebook: string | null;
  first_name: string | null;
  gallery: string[] | null;
  gender: string | null;
  gym_name: string | null;
  has_premium: boolean | null;
  id: string;
  instagram: string | null;
  joined: string;
  last_name: string | null;
  phone: string | null;
  pro_type: string | null;
  profile_picture_url: string | null;
  state: string | null;
  twitter: string | null;
  type: UserType | null;
  username: string | null;
  website: string | null;
};

export type NutritionistDetails = {
  active_clients: string | null;
  birth_date: string | null;
  birth_month: string | null;
  birth_year: string | null;
  certificate: boolean | null;
  city: string | null;
  completed_clients: string | null;
  country: string | null;
  description: string | null;
  email: string | null;
  experience: string | null;
  facebook: string | null;
  first_name: string | null;
  gallery: string | null;
  gender: string | null;
  gym_name: string | null;
  has_premium: boolean | null;
  id: string;
  instagram: string | null;
  joined: string;
  last_name: string | null;
  phone: string | null;
  pro_type: string | null;
  profile_picture_url: string | null;
  programs: string | null;
  state: string | null;
  twitter: string | null;
  type: UserType | null;
  username: string | null;
  website: string | null;
};

export type GymDetails = {
  active_clients: string | null;
  active_personal_trainers: number | null;
  certificate: boolean | null;
  city: string | null;
  completed_clients: string | null;
  country: string | null;
  description: string | null;
  email: string | null;
  experience: string | null;
  facebook: string | null;
  first_name: string | null;
  gallery: string | null;
  gym_name: string | null;
  has_premium: boolean | null;
  id: string;
  instagram: string | null;
  joined: string;
  last_name: string | null;
  personal: string | null;
  phone: string | null;
  pro_type: string | null;
  profile_picture_url: string | null;
  state: string | null;
  street: string | null;
  street_number: string | null;
  twitter: string | null;
  type: UserType | null;
  username: string | null;
  website: string | null;
};
