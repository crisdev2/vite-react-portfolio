import type { ReactNode } from "react";

export interface ITimeLine {
  startDate: string;
  endDate: string;
  title: ReactNode;
  description: ReactNode;
}
