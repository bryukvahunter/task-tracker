import type { Status } from "@/entities/task/types/task";

type StatusValues = { value: Status; title: string };

export interface StatusBlockSetting {
  status: StatusValues;
  classNames: Record<
    "statusHeaderQuantity" | "statusHeader" | "statusBlock",
    string
  >;
}
