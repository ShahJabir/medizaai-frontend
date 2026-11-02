import { HOSPITALS } from "@/data/hospitals";
import type { Hospital } from "@/types/hospital";

export async function getHospitals(): Promise<Hospital[]> {
  return HOSPITALS;
}