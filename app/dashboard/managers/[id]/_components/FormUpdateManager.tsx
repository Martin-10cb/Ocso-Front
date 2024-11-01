import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateManager({
  manager,
}: {
  manager: Manager;
}) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
  });
  const stores = await responseStores.json();
  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
      <h1>Actualizar managers</h1>
      <Input
        defaultValue={manager.managerFullName}
        placeholder="Martin Barreto"
        name="managerFullName"
      />
      <Input
        defaultValue={manager.managerEmail}
        placeholder="martin@ocso.com"
        name="managerEmail"
      />
      <Input
        defaultValue={String(manager.managerSalary)}
        placeholder="martin@ocso.com"
        name="12000"
      />
      <Input
        defaultValue={String(manager.managerPhoneNumber)}
        placeholder="martin@ocso.com"
        name="7731343573"
      />
      <SelectStore
        stores={stores}
        defaultStore={manager?.location?.locationId}
      />
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}
