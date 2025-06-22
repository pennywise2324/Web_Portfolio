// projectData.ts
export type Project = {
  src: string;
  title: string;
  description: string;
};

import urbanSprawl from "./assets/urban sprawl 1998-2023.png";
import banjirRob from "./assets/Potensi Banjir Rob Pekalongan.png";
import kekeringan from "./assets/area terdampak kekeringan.png";
import nbr from "./assets/nbr.png";
import banjir from "./assets/Banjir.png";
import perubahanPantai from "./assets/Perubahan Garis Pantai.png";

export const projectData: Project[] = [
  {
    src: urbanSprawl,
    title: "Urban Sprawl 1998-2023",
    description:
      "Analisis perubahan area terbangun di Kota Bandung menggunakan NDBI dan NDWI.",
  },
  {
    src: banjirRob,
    title: "Potensi Banjir Rob Pekalongan",
    description:
      "Menggunakan citra SAR Sentinel-1 untuk mengidentifikasi area tergenang banjir rob.",
  },
  {
    src: kekeringan,
    title: "Area Terdampak Kekeringan",
    description:
      "Menggunakan data NDVI dan LST untuk mengidentifikasi kekeringan.",
  },
  {
    src: nbr,
    title: "Kebakaran Hutan (NBR)",
    description:
      "Menggunakan indeks NBR untuk mendeteksi area kebakaran hutan.",
  },
  {
    src: banjir,
    title: "Analisis Banjir",
    description: "Pemantauan dan pemetaan area terdampak banjir.",
  },
  {
    src: perubahanPantai,
    title: "Perubahan Garis Pantai",
    description: "Analisis perubahan garis pantai dalam jangka waktu tertentu.",
  },
];

export default projects;
