"use server";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default function registerEmployee(
  employeeId: string,
  formData: FormData
) {
  let data: any = {};
  data.userEmail = formData.get("userEmail");
  data.userPassword = formData.get("userPassword");
  data.userRoles = "Employee";

  const response = fetch(
    `${API_URL}/auth/register/${employeeId}?role=employee`,
    {
      method: "POST",
      headers: {
        ...authHeaders(),
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  console.log(response);
}
