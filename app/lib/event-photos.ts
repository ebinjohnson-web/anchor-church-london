import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

export type EventPhoto = { src: string; alt: string };
export type EventAlbum = { id: string; year: string; title: string; dateLabel: string; sortDate: string; photos: EventPhoto[] };
const imageExtension = /\.(jpe?g|png|webp|avif)$/i;
const knownEvents: Record<string, { title: string; dateLabel: string; sortDate: string }> = {
  "2026-Annual-Family-Camp-Aug-1-to-Aug-3": { title: "Annual Family Camp", dateLabel: "August 1–3, 2026", sortDate: "2026-08-01" },
};
function describeAlbum(name: string, year: string) {
  if (knownEvents[name]) return knownEvents[name];
  const dated = /^(\d{4})-(\d{2})(?:-(\d{2}))?(?:-(.+))?$/.exec(name);
  if (dated) {
    const month = Number(dated[2]);
    const day = Number(dated[3] ?? "1");
    const date = new Date(Date.UTC(Number(dated[1]), month - 1, day));
    if (month < 1 || month > 12 || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) throw new Error(`Invalid event date in folder: ${name}`);
    const dateLabel = date.toLocaleDateString("en-CA", { year: "numeric", month: "long", ...(dated[3] ? { day: "numeric" as const } : {}), timeZone: "UTC" });
    const title = dated[4] ? dated[4].replace(/[-_]+/g, " ").replace(/\b[a-z]/g, letter => letter.toUpperCase()) : "Church Family Moments";
    return { title, dateLabel, sortDate: `${dated[1]}-${dated[2]}-${dated[3] ?? "00"}` };
  }
  // A year-only folder is a year collection, not an invented event date.
  return { title: name === year ? "Church Family Moments" : name.replace(/^\d{4}[-_ ]?/, "").replace(/[-_]+/g, " "), dateLabel: year, sortDate: `${year}-00-00` };
}
export function getEventAlbums(): EventAlbum[] {
  const images = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(images)) return [];
  const albums: EventAlbum[] = [];
  function readFolder(relative: string, year: string) {
    const directory = path.join(images, relative);
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    const name = path.basename(directory);
    const description = describeAlbum(name, year);
    const seen = new Set<string>();
    const photos = entries.filter(file => file.isFile() && imageExtension.test(file.name))
      .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))
      .filter(file => {
        const digest = createHash("sha256").update(fs.readFileSync(path.join(directory, file.name))).digest("hex");
        if (seen.has(digest)) return false;
        seen.add(digest);
        return true;
      })
      .map(file => ({ src: `/images/${relative.split(path.sep).join("/")}/${file.name}`, alt: `${description.title} at Anchor Church London, ${description.dateLabel}` }));
    if (photos.length) albums.push({ id: relative.split(path.sep).join("/"), year, ...description, photos });
    entries.filter(entry => entry.isDirectory()).forEach(entry => {
      const nestedYear = /^(\d{4})(?:$|[-_ ])/.exec(entry.name)?.[1] ?? year;
      readFolder(path.join(relative, entry.name), nestedYear);
    });
  }
  fs.readdirSync(images, { withFileTypes: true }).filter(entry => entry.isDirectory()).forEach(entry => {
    const year = /^(\d{4})(?:$|[-_ ])/.exec(entry.name)?.[1];
    if (year) readFolder(entry.name, year);
  });
  return albums.sort((a, b) => b.sortDate.localeCompare(a.sortDate) || a.title.localeCompare(b.title) || a.id.localeCompare(b.id));
}
export function getAnniversaryPoster(): string | null {
  const images = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(images)) return null;
  const file = fs.readdirSync(images, { withFileTypes: true }).find(file => file.isFile() && /^anniversary-5\.(jpe?g|png|webp|avif)$/i.test(file.name));
  return file ? `/images/${file.name}` : null;
}
