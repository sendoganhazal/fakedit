export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  rections: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface PostTags {
  slug: string;
  name: string;
  url: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string; // or "moderator", or "user"
}
export interface PostParams {
  limit?: number;
  offset?: number;
  sort?: "asc" | "desc";
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface TagList {
  slug: string;
  name: string;
  url: string;
}
