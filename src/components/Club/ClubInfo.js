import { createElement } from "../../helpers/createElement.js";

export default function ClubInfo({ name, image }) {
  const src = `./src/assets/images/clubs/${image ?? "no-club"}.png`;

  const ClubInfoImage = createElement("img", {
    src,
    alt: name,
  });
  const ClubInfoName = createElement("h4", { class: "club__content" }, name);

  return createElement(
    "div",
    { class: "club__info" },
    ClubInfoImage,
    ClubInfoName
  );
}
