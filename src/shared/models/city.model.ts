export type City = {
  id: string;
  city_name: string;
  region_name: string;
};

export type CitiesResponse = {
  cities: City[];
};
