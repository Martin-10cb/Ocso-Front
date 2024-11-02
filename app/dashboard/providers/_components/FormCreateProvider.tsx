import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";
import { label } from "framer-motion/client";

export default function FormCreateProvider() {
  return (
    <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
        <h1 className="text-2xl text-white">Crear proveedor</h1>
      <Input label="Nombre" placeholder="Coca" name="providerName" />
      <Input
        placeholder="coca@gmail.com"
        label="Correo "
        name="providerEmail"
      />
      <Input
        label="Telefono"
        placeholder="7731343573"
        name="providerPhoneNumber"
      />
      <Button color="primary" type="submit">Crear Proveedor</Button>
    </form>
  );
}
