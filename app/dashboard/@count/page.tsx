import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";

const CountPage = async () => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;

  try {
    const response = await fetch("http://127.0.0.1:4000/locations", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    const cantidad = data?.length;
    return `Hay ${cantidad} tienda${cantidad > 1 ? "s" : ""}`;
  } catch (error) {
    console.error("Error al obtener las ubicaciones:", error);
    return "Error al cargar la información";
  }
};

export default CountPage;

// import { TOKEN_NAME } from "@/constants";
// import axios from "axios";
// import { cookies } from "next/headers";

// const CountPage = async () => {
//   const userCookies = cookies();
//   const token = userCookies.get(TOKEN_NAME)?.value;
//   const countLocations = await axios.get("http://127.0.0.1:4000/locations", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const cantidad = countLocations?.data?.length;
//   return `Hay ${cantidad} tienda ${cantidad > 1 ? "s" : ""}`;
// };

// export default CountPage;
