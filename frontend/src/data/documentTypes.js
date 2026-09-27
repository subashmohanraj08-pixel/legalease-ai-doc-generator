import {
  Home,
  ShieldCheck,
  FileText,
  BriefcaseBusiness,
  Handshake,
  Scale,
} from "lucide-react";

export const documentTypes = [
  {
    id: "rental",
    title: "Rental Agreement",
    description:
      "Create a structured rental agreement using a simple guided questionnaire.",
    icon: Home,
    color: "blue",
  },

  {
    id: "nda",
    title: "NDA",
    description:
      "Create a Non-Disclosure Agreement for protecting confidential information.",
    icon: ShieldCheck,
    color: "purple",
  },

  {
    id: "employment",
    title: "Employment Contract",
    description:
      "Generate an employment contract with role, salary and working conditions.",
    icon: BriefcaseBusiness,
    color: "green",
  },

  {
    id: "service",
    title: "Service Agreement",
    description:
      "Create an agreement between a service provider and a client.",
    icon: Handshake,
    color: "orange",
  },

  {
    id: "general",
    title: "General Contract",
    description:
      "Build a customizable contract based on your requirements.",
    icon: FileText,
    color: "red",
  },

  {
    id: "legal-notice",
    title: "Legal Notice",
    description:
      "Prepare a structured legal notice draft from guided information.",
    icon: Scale,
    color: "teal",
  },
];
