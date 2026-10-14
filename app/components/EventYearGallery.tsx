"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { EventAlbum } from "../lib/event-photos";
import { assetPath } from "../lib/assets";

export default function EventYearGallery({ albums }: { albums: EventAlbum[] }) {
  const [year, setYear] = useState(albums[0]?.year ?? "");
  const [albumId, setAlbumId] = useState(albums[0]?.id ?? "");
  const [visible, setVisible] = useState(12);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const years = Array.from(new Set(albums.map(album => album.year)));
  const yearAlbums = albums.filter(album => album.year === year);
  const album = yearAlbums.find(album => album.id === albumId) ?? yearAlbums[0];
  useEffect(() => { if (selected !== null && !dialog.current?.open) dialog.current?.showModal(); }, [selected]);
  if (!album) return null;
  const photos = album.photos;
  function previous() { setSelected(value => value === null ? null : (value - 1 + photos.length) % photos.length); }
  function next() { setSelected(value => value === null ? null : (value + 1) % photos.length); }
  return <div className="event-year-gallery">
    <div className="event-year-controls" aria-label="Choose a photo gallery year">{years.map(item => <button type="button" key={item} aria-pressed={year === item} onClick={() => { setYear(item); setAlbumId(albums.find(album => album.year === item)?.id ?? ""); setVisible(12); }}>{item}<span>{albums.filter(album => album.year === item).reduce((total, album) => total + album.photos.length, 0)} photos</span></button>)}</div>
    {yearAlbums.length > 1 && <div className="event-collection-controls" aria-label={`Choose an event from ${year}`}>{yearAlbums.map(item => <button type="button" key={item.id} aria-pressed={album.id === item.id} onClick={() => { setAlbumId(item.id); setVisible(12); }}>{item.title}<span>{item.dateLabel}</span></button>)}</div>}
    <div className="event-album-heading"><p className="event-album-date">{album.dateLabel}</p><h3>{album.title}</h3><p>Select a photo to see the full image.</p></div>
    <div className="event-photo-grid">{photos.slice(0, visible).map((photo, index) => <button className="event-photo-card" type="button" key={photo.src} aria-label={`View church photo ${index + 1} from ${album.year}`} onClick={event => { trigger.current = event.currentTarget; setSelected(index); }}><Image src={assetPath(photo.src)} alt={photo.alt} fill sizes="(max-width: 600px) 45vw, (max-width: 900px) 30vw, 25vw" onLoad={event => { const image = event.currentTarget; if (image.naturalWidth && image.naturalHeight && image.parentElement) image.parentElement.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`; }} /></button>)}</div>
    <div className="event-album-bottom"><p>Showing {Math.min(visible, photos.length)} of {photos.length} photos</p>{visible < photos.length && <button className="event-button event-button-outline" type="button" onClick={() => setVisible(value => value + 12)}>View More Photos</button>}</div>
    {selected !== null && <dialog className="event-photo-dialog" ref={dialog} aria-label={`Church photo from ${album.year}`} onClose={() => { setSelected(null); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => { if (event.key === "ArrowLeft") { event.preventDefault(); previous(); } if (event.key === "ArrowRight") { event.preventDefault(); next(); } }}><div className="event-photo-dialog-content"><div className="event-photo-toolbar"><span>{album.year} · {selected + 1} / {photos.length}</span><button type="button" autoFocus aria-label="Close photo" onClick={() => dialog.current?.close()}>×</button></div><div className="event-photo-full"><Image src={assetPath(photos[selected].src)} alt={photos[selected].alt} fill sizes="94vw" /></div><div className="event-photo-navigation"><button type="button" onClick={previous}>← Previous</button><button type="button" onClick={next}>Next →</button></div></div></dialog>}
  </div>;
}
