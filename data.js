export const data = [
  {
    id: "todo",
    name: "Todo",
    bgColor: "yellow",
    children: [
      {
        id: crypto.randomUUID(),
        name: "Hello World - Todo",
        description: "Description of Hello World",
      },
    ],
  },
  {
    id: "in_progress",
    name: "In Progress",
    bgColor: "green",
    children: [
      {
        id: crypto.randomUUID(),
        name: "Hello Node - In-Progress",
        description: "Description of Hello World",
      },
    ],
  },
  {
    id: "done",
    name: "Done",
    bgColor: "blue",
    children: [
      {
        id: crypto.randomUUID(),
        name: "Hello React - Done",
        description: "Description of Hello World",
      },
    ],
  },
];
