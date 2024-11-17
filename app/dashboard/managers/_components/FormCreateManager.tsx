import { Button, Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStore";
import { Location } from "@/entities";

export default function FormCreateManager({ stores }: { stores: Location[] }) {
  return (
    <form className="flex flex-col ">
      <h1 className="text-4xl font-bold text-white">Crear Manager</h1>
      <Input label="Nombre completo" name="managerFullName" />
      <Input label="Salario" name="managerSalary" />
      <Input label="Correo" name="managerEmail" />
      <Input label="Numero de telefono" name="managerPhoneNumber" />
      <SelectStore stores={stores} />
      <Button color="primary" type="submit">
        Crear manager
      </Button>
    </form>
  );
}
