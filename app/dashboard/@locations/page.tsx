import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCards from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let response = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashboard:locations"]
    }
  });
  let data: Location[] = await response.json()
  data = [
    {
      locationId: 0,
      locationName: "Ninugna",
      locationLatLng: [0, 0],
      locationAddres: "No existe",
    },
    ...data,
  ];
  return (
    <div className="w-8/12">
      <div className="w-full flex flex-col items-center h-[90vh]">
        <div className="w-1/2 my-10">
          <SelectLocation locations={data} store={searchParams?.store} />
        </div>
        <div className="w-8/12">
          <LocationCards store={searchParams.store} />
        </div>
        <div className="w-6/12">
          <FormNewLocation store={searchParams.store} />
        </div>
        <DeleteLocationButton store={searchParams.store} />
      </div>
    </div>
  );
};
export default LocationsPage;
