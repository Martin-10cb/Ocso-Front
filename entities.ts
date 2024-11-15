export interface Location {
  locationId: number;
  locationName: string;
  locationAddres: string;
  locationLatLng: number[];
  manager?: Manager;
  region?: any;
  employees?: Employee[];
}

export interface Employee {
  employeeId: string;
  employeeName: string;
  employeeLastName: string;
  employeePhoneNumber: string;
  employeeEmail: string;
  employeePhoto?: string;
  location?: Location;
  user?: any;
}

export interface Manager {
  managerId: string;
  managerFullName: string;
  managerSalary: number;
  managerEmail: string;
  managerPhoneNumber: string;
  location: Location;
  user: any;
}

export interface Provider {
  providerId: string;
  providerName: string;
  providerEmail: string;
  providerPhoneNumber: string;
  products: Product[];
}

export interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  productCountSeal: number;
  provider: Provider;
}
