import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";

export default async function LocationCards({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      ...authHeaders()
    },
  });
  return (
    <Card>
      <CardHeader>
        <b className="w-full text-2xl">{data.locationName}</b>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col item-center w-full">
        <p className="w-full">
          Manager:{" "}
          <Link href={{ pathname: `/dashboard/managers` }}>
            <b>{data.manager?.managerFullName}</b>
          </Link>
        </p>
        <p className="w-full">
          Direccion:<b>{data.locationAddres}</b>
        </p>
        <iframe
          className="border-2 border-orange-800 rounded-md my-2"
          width="300"
          height="200"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA2bS2yvgDkfQ9v6nHMqnmAa3pyVm5HztE&q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}
        ></iframe>
      </CardBody>
    </Card>
  );
}
