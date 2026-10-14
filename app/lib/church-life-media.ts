import { getEventAlbums } from "./event-photos";
import { churchLifePhotos } from "./church-life-photos";

export function getChurchLifeMedia() {
  const albums = getEventAlbums();
  const recent = albums.flatMap(album => album.photos
    .filter(photo => !/family-camp-001\./i.test(photo.src))
    .map(photo => ({ src: photo.src, alt: photo.alt }))).slice(0, 2);
  const community = churchLifePhotos.map(photo => ({ src: photo.src, alt: photo.alt }));
  const gallery = [...recent, ...community].filter((photo, index, photos) => photos.findIndex(item => item.src === photo.src) === index).slice(0, 4);
  return {
    gallery,
    ministries: community[0] ?? recent[0],
    care: community[1] ?? community[0] ?? recent[0],
    messages: community[0] ?? recent[0],
    events: recent[0] ?? community[1] ?? community[0],
  };
}
