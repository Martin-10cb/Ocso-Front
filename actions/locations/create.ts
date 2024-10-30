"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "../../helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Location } from "@/entities";

export async function createLocation(formData: FormData) {
  let location: any = {};
  let locationLatLng = [0, 0];
  for (const key of formData.keys()) {
    const value = formData.get(key);
    if (value) {
      if (key === "locationLat") {
        locationLatLng[0] = +value;
      } else if (key === "locationLng") {
        locationLatLng[1] = +value;
      } else {
        location[key] = formData.get(key);
      }
    }
  }
  location.locationLatLng = location;
  const response = await fetch(`${API_URL}/locations`, {
    method: "POST",
    body: JSON.stringify(location),
    headers: {
      "content-type": "application/json",
      ...authHeaders(),
    },
  });
  const data: Location = await response.json();
  if (response.status === 201) {
    revalidateTag("dashboard:locations");
    redirect(`/dashboard?store=${data.locationId}`);
  }
}
