import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButton";

export default function FormUpdateProvider({
  provider,
}: {
  provider: Provider;
}) {
  const { providerId } = provider;
  const updateProviderWithId = updateProvider.bind(null, providerId);
  return (
    <>
      <h1 className="text-xl px-2">Actualizar datos</h1>
      <form
        action={updateProviderWithId}
        className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-10 items-center justify-center"
      >
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerName}
          label="Nombre"
          placeholder="Coca"
          name="providerName"
        />
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerEmail}
          placeholder="coca@gmail.com"
          label="Correo "
          name="providerEmail"
        />
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerPhoneNumber}
          label="Telefono"
          placeholder="7731343573"
          name="providerPhoneNumber"
        />
        <Button color="primary" type="submit">
          Actualizar
        </Button>
        <DeleteProvider>
          <h1 className="text-white text-4xl text-center">
            ¿Estás seguro de eliminar al proveedor <b>{provider.providerName}</b>?
          </h1>
          <DeleteProviderButton providerId={providerId} />
        </DeleteProvider>
      </form>
    </>
  );
}
