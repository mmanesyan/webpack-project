import { createElement } from "../../helpers/createElement.js";

export default function ClubPoints({ stats = {} }) {
  const PointsNodes = Object.values(stats).map((stat) =>
    createElement("h4", { class: "club__content" }, stat)
  );

  return createElement("div", { class: "club__points" }, ...PointsNodes);
}
