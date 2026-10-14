import fs from "node:fs";
import path from "node:path";

export function getChurchLifeMedia() {
  const folder = path.join(process.cwd(), "public", "images", "church-life");

  if (!fs.existsSync(folder)) {
    throw new Error("Photo folder missing: public/images/church-life");
  }

  const files = fs.readdirSync(folder, { withFileTypes: true })
    .filter(file => file.isFile() && /\.(jpe?g|png|webp|avif)$/i.test(file.name))
    .map(file => file.name);

  function photo(name: string, alt: string) {
    const matches = files.filter(
      file => path.parse(file).name.toLowerCase() === name
    );

    if (matches.length !== 1) {
      throw new Error(
        `Expected one photo named ${name} in public/images/church-life; found ${matches.length}.`
      );
    }

    return {
      src: `/images/church-life/${matches[0]}`,
      alt,
    };
  }

  return {
    gallery: [
      photo(
        "church-family",
        "The Anchor Church London family gathered together"
      ),
      { src: "/images/church-life-2.jpg", alt: "The Anchor Church London family together" },
      photo(
        "ministries-children",
        "Children participating in church life at Anchor Church London"
      ),
      photo(
        "prayer-care-families",
        "Families sharing life together at Anchor Church London"
      ),
    ],
    ministries: photo(
      "ministries",
      "Ministry participation at Anchor Church London"
    ),
    care: photo(
      "prayer-care",
      "Prayer and care at Anchor Church London"
    ),
    messages: photo(
      "sermons-messages-preaching",
      "Preaching at Anchor Church London"
    ),
    events: photo(
      "events-stories-fellowship",
      "Fellowship with the Anchor Church London family"
    ),
  };
}