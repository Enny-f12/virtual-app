export type Order = {
  service: string;
  title: string;
  lines: { label: string; value: string }[];
  amount: number;
};