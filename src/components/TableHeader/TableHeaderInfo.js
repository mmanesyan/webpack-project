import { createElement } from "../../helpers/createElement.js";

export default function TableHeaderInfo({ title, description }) {
  const TableInfoTitle = createElement("h2", { class: "title" }, title);

  const TableInfoDescription = createElement("p", {}, description);

  return createElement(
    "div",
    { class: "header__info" },
    TableInfoTitle,
    TableInfoDescription
  );
}
