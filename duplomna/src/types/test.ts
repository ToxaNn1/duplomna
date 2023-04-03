export interface SecondProps {
  name2: string;
  age2: number;
  date2: string;
  address2: {
    city: "c" | "d";
    street: string;
  };
}
export interface Props extends SecondProps {
  name: string;
  age: number;
  date: string;
  address: {
    city: "a" | "b";
    street: string;
  };
}
