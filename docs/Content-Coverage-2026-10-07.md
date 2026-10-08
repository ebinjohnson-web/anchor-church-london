# Pastor document content review — 7 October 2026

Reference: Anchor_Church_Website_Content_Text_Welcome(1).docx, dated 1 October 2026 (18 pages).
Baseline: main commit 4dd710b. This update preserves the existing homepage and motion implementation.

| Document section | Website location | Coverage |
| --- | --- | --- |
| Home and pastor welcome, pp. 2–4 | / and /visit | Existing short welcome, full welcome, service details and next-step links retained. Later approved shorter introduction and skyline design retained. |
| Visitor questions, p. 5 | /visit | Existing questions retained; prayer and online-message answers now link to their new pages. |
| Story and leadership, p. 6 | /about | Existing story, mission, vision, values and biography retained. |
| Beliefs, p. 7 | /beliefs | All nine supplied summary statements added verbatim. The church's full adopted confession has not been supplied, so no full-statement download is claimed. |
| Mission and partnerships, p. 7 | /about#partnerships | Existing mission and five affiliations retained; supplied resource paragraph and CNBC/NAMB links added. |
| Explore Jesus and Next Steps, p. 8 | /next-steps | Existing faith explanation, questions, baptism, membership, groups and serving copy retained. |
| Ministries, p. 9 | /ministries and /church-life | Worship, teaching and fellowship copy retained. Optional programmes with unknown operating details remain omitted. |
| Opportunities and internships, p. 10 | /opportunities | Existing enquiry-based opportunities and internship copy retained. |
| Prayer and pastoral care, p. 11 | /prayer-care | Invitation, spiritual support, contact, urgent-needs, privacy and prayer-sharing guidance added. Uses requests for contact through the current general church email; no unverified private routing or care submission service is claimed. |
| Messages, p. 12 | /messages | Supplied introduction and all three reflection prompts added. Contact action requests the current message/broadcast link. |
| Events and stories, p. 12 | /events | Supplied gathering invitation, enquiry action and link to church life. No fabricated event, story, speaker or date. |
| Giving questions, p. 13 | /give | All three questions in compact expandable rows. Gift-use and receipt answers from the document. Regular-giving answer invites contact because the source answer is a placeholder. Existing brief contact-only giving introduction retained. |
| Contact, p. 13 | /contact | Contact added after Give in both navigation versions; link to Prayer and Care added. Existing email composer retained. |
| Forms and privacy, p. 14 | Existing email enquiries | Direct submission and care-routing forms require a chosen provider, responsible recipients and church-approved privacy practices. Email links still open drafts; they do not send or report successful delivery. |
| Design and search, p. 15 | Existing design, metadata and sitemap | New pages reuse existing components, type, colours and spacing. New routes included in sitemap. |
| Photos and final inputs, pp. 16–18 | Existing assets | No new stock or invented church photographs. Existing supplied photos retained. |

## Still needs church material

- Latest sermon title, speaker, passage, date and working video link; livestream destination.
- Confirmed events with dates, times, venue and any registration link.
- One member-approved story, display name and photo. The homepage modules stay omitted until supplied.
- E-transfer donation address, legal recipient, instructions and authorized finance contact. Regular-giving and receipt arrangements remain enquiries.
- Full adopted statement of faith; leadership review of the supplied summary before publishing this patch.
- Operating details for optional children/youth/community programmes, additional leaders, and venue/parking/entrance photos.
- Form provider, recipients, care-response and sharing process, retention/privacy notice, approved social links and safeguarding contact.

## Implementation notes

Public pages omit bracketed placeholders and developer instructions. Care text is adapted to the actual email-contact workflow rather than promising form routing that is not configured. The page asks visitors to arrange pastoral contact before sharing sensitive details.
The homepage, ticker, motion provider, image files and font files are untouched by this patch. Only primary-navigation horizontal padding changes slightly to fit Contact on desktop. Giving answers use native details/summary controls.
