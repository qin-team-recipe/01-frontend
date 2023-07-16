import { TabBar } from "./TabBar";

export default {
  component: TabBar,
};

export const Default = {
  args: {
    data: [
      { label: "Tab 1", isActive: false },
      { label: "Tab 2", isActive: true },
    ],
  },
};
