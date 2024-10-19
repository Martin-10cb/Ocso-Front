import { TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocation from "./_components/SelectLocation";
import LocationCards from "./_components/LocationCard";

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  let { data } = await axios.get<Location[]>(
    "http://127.0.0.1:4000/locations",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
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
      </div>
    </div>
  );
};
export default LocationsPage;
