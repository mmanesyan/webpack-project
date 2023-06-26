import { linerConstants } from "../../constants/linerContents.constants.js";
import { createElement } from "../../helpers/createElement.js";

export default function TableLiner() {
  const TableLinerTitle = createElement("h4", { class: "title" }, "Club");

  const TableLinerContents = linerConstants.map((constant) => {
    return createElement("h4", { class: "title" }, constant.toUpperCase());
  });

  const TableLinerContentsSection = createElement(
    "div",
    {},
    ...TableLinerContents
  );

  return createElement(
    "div",
    { class: "liner-section" },
    TableLinerTitle,
    TableLinerContentsSection
  );
}
