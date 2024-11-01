import deleteManager from "@/actions/managers/delete";
import { Button } from "@nextui-org/react";
import { LuTrash } from "react-icons/lu";

export default function DeleteManagerButton({
  managerId,
}: {
  managerId: string;
}) {
  const deleteByManegerId = deleteManager.bind(null, managerId);
  return (
    <form action={deleteByManegerId}>
      <Button color="danger" type="submit">
        <LuTrash size="20" />
      </Button>
    </form>
  );
}
