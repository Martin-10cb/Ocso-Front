import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import SelectManager from "./SelectManagers";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store || store == undefined || typeof store == "object") return null;
  const updateWithStoreId = updateLocation.bind(null, store);
  const responseManagers = await fetch(`${API_URL}/managers`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashboard:managers"],
    },
  });
  const dataManagers: Manager[] = await responseManagers.json();
  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
    next: {
      tags: ["dashboard:locations"],
    },
  });
  const dataLocations: Location[] = await responseLocations.json();
  let foundLocation = dataLocations.find(
    (location) => location.locationId == +store
  );
  let foundManager = dataManagers.find(
    (manager) => manager.managerId == foundLocation?.manager?.managerId
  );
  return (
    <form
      action={updateWithStoreId}
      className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg"
    >
      <h1 className="text-3xl text-white text-center">Crear tienda</h1>
      <Input
        required={true}
        defaultValue={foundLocation?.locationName}
        label="Nombre"
        placeholder="Ocso Jurikiya"
        name="locationName"
      />
      <Input
        required={true}
        defaultValue={foundLocation?.locationAddres}
        label="Direccion"
        placeholder="Av de la luz S/N"
        name="locationAddress"
      />
      <Input
        required={true}
        defaultValue={foundLocation?.locationLatLng[0].toString()}
        label="Latitud"
        placeholder="-120"
        name="locationLat"
      />
      <Input
        required={true}
        defaultValue={foundLocation?.locationLatLng[1].toString()}
        label="Longitud"
        placeholder="20"
        name="locationLng"
      />
      <SelectManager
        defaultManager={foundManager?.managerId}
        managers={dataManagers}
        locations={dataLocations}
      />
      <Button type="submit" color="warning">
        Actualizar
      </Button>
    </form>
  );
}
