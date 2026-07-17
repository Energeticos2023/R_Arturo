import type { Metadata } from "next";
import { CampaignSite } from "./CampaignSite";

export const metadata: Metadata = {
  title: "Arturo Santisteban | Mochumí 2027–2030",
  description:
    "Propuesta ciudadana participativa para Mochumí, construida a partir de fuentes oficiales y abierta a la participación vecinal.",
};

export default function Home() {
  return <CampaignSite />;
}

