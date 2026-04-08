import type { StatusBlockSetting } from "./types";

export const statusConfig: StatusBlockSetting[] = [
  {
    status: { value: "todo", title: "To do" },
    classNames: {
      statusHeaderQuantity: "todoHeaderQuantity",
      statusHeader: "todoHeader",
      statusBlock: "todoBlock",
    },
  },
  {
    status: { value: "inProgress", title: "In progress" },

    classNames: {
      statusHeaderQuantity: "inProgressHeaderQuantity",
      statusHeader: "inProgressHeader",
      statusBlock: "inProgressBlock",
    },
  },
  {
    status: { value: "done", title: "Done" },
    classNames: {
      statusHeaderQuantity: "doneHeaderQuantity",
      statusHeader: "doneHeader",
      statusBlock: "doneBlock",
    },
  },
];
