export type CATEGORYTYPE = {
  name: string;
  image: string;
  starting: number;
  Packages: PACKAGETYPE[];
};

export type PACKAGETYPE = {
  name: string;
  image: string;
  starting: number;
  days: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type SignupInput = {
  name: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type BookingType = {
  id: number | null;
  name: string | null;
  user: User | null;
  date: Date | string | null;
  startDate: Date | string | null;
  price: number | null;
  people: number | null;
  days: number | null;
  placeList: string | null;
  status: "pending" | "approved" | "rejected" | null;
};

export type QueriesTypes = {
  id: number;
  name: string;
  email: string;
  message: string;
};

export type Itinerary = {
  name?: string;
  description?: string;
};

export type TourType = {
  __id: string;
  name: string;
  image: string;
  days: number;
  Overview: string[] | undefined;
  Highlights?: string[] | undefined;
  Inclusion: string[] | undefined;
  Exclusion: string[] | undefined;
  Itinerary: Itinerary[] | undefined;
  FAQs: Itinerary[] | undefined;
  Price?: number;
};

export type BookingInput = {
  PackageName: string;
  PackageDays: number;
  PackagePrice: number;
  people: number;
  startDate: Date;
  PlaceList?: string[];
  hotel?: string;
  AdventureList?: string[];
};
