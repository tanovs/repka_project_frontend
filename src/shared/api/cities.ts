import { CitiesResponse } from "../models/city.model";
import { api } from "./core/config";

const CITIES_BASE = "cities";

const getAllCities = () => api.get<CitiesResponse>(`${CITIES_BASE}/all`);

const getCitiesLike = (query: string) =>
  api.get<CitiesResponse>(`${CITIES_BASE}/like`, {
    params: {
      like: query,
    },
  });
