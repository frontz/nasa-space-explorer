/** src/app/core/models/apod.model.ts */
export interface Apod {
  /** Data APOD (YYYY‑MM‑DD) */
  date: string;

  /** Pełny opis */
  explanation: string;

  /** “image” albo “video” */
  media_type: 'image' | 'video';

  /** Tytuł zdjęcia / wideo */
  title: string;

  /** URL do zasobu SD (obrazek lub wideo) */
  url: string;

  /** URL do wersji HD, gdy dostępna */
  hdurl?: string;

  /** Wersja API (np. v1) */
  service_version: string;

  /** Informacja o prawach autorskich – występuje sporadycznie */
  copyright?: string;

  /** Miniatura wideo (tylko gdy media_type === 'video') */
  thumbnail_url?: string;

  /** Tagowane pojęcia (gdy concept_tags=true) */
  concepts?: string[];
}
