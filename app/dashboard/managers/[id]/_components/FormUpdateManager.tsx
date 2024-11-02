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
    <form
      action={updateManagerWithId}
      className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2"
    >
      <h1 className="text-2xl text-white font-semibold text-center">
        Actualizar managers
      </h1>
      <Input
        required={true}
        isRequired
        label="Nombre completo"
        defaultValue={manager.managerFullName}
        placeholder="Martin Barreto"
        name="managerFullName"
      />
      <Input
        required={true}
        isRequired
        label="Correo Electronico"
        defaultValue={manager.managerEmail}
        placeholder="martin@ocso.com"
        name="managerEmail"
      />
      <Input
        required={true}
        isRequired
        label="Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="12000"
        name="managerSalary"
      />
      <Input
        required={true}
        isRequired
        label="Numero de telefono"
        defaultValue={String(manager.managerPhoneNumber)}
        placeholder="7731343573"
        name="managerPhoneNumber"
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