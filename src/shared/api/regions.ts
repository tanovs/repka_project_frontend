import { RegionResponse } from "../models/region.model";
import { api } from "./core/config";

const REGIONS_BASE = "regions";

const getAllRegions = () => api.get<RegionResponse>(`${REGIONS_BASE}/all`);

const getRegionsLike = (query: string) =>
  api.get<RegionResponse>(`${REGIONS_BASE}/like`, {
    params: {
      like: query,
    },
  });
