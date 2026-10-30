import * as React from "react";
export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  title: string;
  price: string;
  /** original price, rendered struck-through in grey */
  compareAt?: string;
  currency?: string;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
