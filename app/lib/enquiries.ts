import { church } from "./church";

// Opens a draft in the visitor's email app. This does not send a submission.
export function enquiryEmail(topic: string) {
  return `mailto:${church.email}?subject=${encodeURIComponent(`Anchor Church enquiry: ${topic}`)}`;
}
