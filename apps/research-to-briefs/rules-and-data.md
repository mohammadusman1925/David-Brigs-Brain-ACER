# Research to Briefs: how it works and the rules for changing it

Route: `/scaling`. Design source of truth: the approved mock-up
(https://claude.ai/artifact/FuHRvVAUmFyebvYQBoxRpE). The live page must look like the mock-up,
and the mock-up is updated in the same round as every change to this page.

## The flow

1. **Research**: links and uploaded files for one product. Analyze with Claude, ChatGPT or Gemini.
   Each research is one `scaling_sessions` row. The Research dropdown (filter: All, This week,
   Last week, This month; "Name this research") switches between them. "+ New research" saves
   the current one and starts clean.
2. **Analysis**: common desire, evidence (desires, pains, frustrations, fears with quotes and
   counts) and 10 to 20 angle cards, each with concepts.
3. **Creative Production**: one research holds several **creative productions**. Each is
   standalone: its own ticked angles, drafts, settings, plans and briefs. "+ New creative
   production" starts clean on the same research and analysis; the team ticks angles right here.
   - What: Video scripts, Image ads or Long-form copy. How: Write from angles, Brand adaptation,
     Brand inspo.
   - Video: bucket (how it is produced, per brand, + Add bucket / + Add format, saved in
     `saved_skills` type `video_buckets`) then a format from that bucket.
   - Image: bucket is Static; 35 static angle types; 3 headlines per static.
   - Outputs per angle 1 to 6, planned in the Variation plan pop-up (presets, direction, editable
     rows). Every output is told what the others say; overlapping openings are marked Too similar.
   - A draft whose format, bucket or angle type changed after writing is Out of date and cannot be
     approved until regenerated.
   - References: video upload or link (Gemini reads script and visuals), pasted script, image
     upload or link, long-form text or page link. Option A keeps the reference's bucket and
     format, Option B chooses our own.
   - AI that writes: model choice for this step only.
   - Move to storage and Delete on each draft; Move all to storage and Delete all on the list.
     Stored drafts are hidden here and in Briefs.
4. **Briefs**: read-only summary of the active production's approved items, template, naming,
   DCT start number. Choices from Creative Production are final here. Each approved output has
   a tick box, all ticked by default (`brief_config.skipItems` holds the unticked ones); only
   ticked outputs get a brief.
5. **Create & Export**: only the active production's briefs, and only the type picked in Briefs
   (video, image or long-form never mix on one screen). Move to storage and Delete per brief, and
   Move all to storage / Delete all for the type on screen. Edit brief, Save, View PDF, Word,
   PDF, All in one Word or PDF (contents page, each brief on its own pages), Generate image in
   Creative Studio for image briefs.
6. **Storage** and 7. **History**: only the current brand. Rows say which production they came from.
   Drafts and briefs moved to storage (`storedAt`) are listed under "Moved to storage" with Bring
   back, which reopens them in their own production and type.

## Where things are stored

- `scaling_sessions.brief_config.productions[]` with `activeProductionId`. Each production has
  `{ id, name, createdAt, state }`. `brief_config.production` mirrors the active one for older
  readers. Sessions from before productions open as "Production 1".
- `scaling_sessions.briefs[]`, each with `productionId` (missing means Production 1). DCT numbers
  are counted across all productions so they never repeat.
- Helpers: `src/lib/productions.ts`. Page wiring: `src/routes/scaling.tsx`.
- Look: `.rtb` styles at the end of `src/styles.css` (Fraunces title, Instrument Sans text,
  JetBrains Mono labels, step cards, sticky save bar).

## Rules learned the hard way

- **Match the mock-up's design, not only its features.** Features shipped in the old look were
  rejected. Compare live and mock-up screenshots side by side before merging.
- **The mock-up's review labels never ship.** "Exists, kept", "Changed", "New", "Proposed",
  "What changes here" and "Decide before build" are notes for review only.
- **Update the mock-up every time the page changes**, with a dated entry in "What changed in the
  live app". Show unbuilt ideas as "Proposed, not built".
- **Each type only shows its own fields.** No hooks, voice-over or production notes on image or
  long-form, no video buckets on statics.
- **Standalone means standalone.** A new research or production shows nothing from another one,
  and another brand's sessions never appear.
- **Never invent claims.** Briefs keep claims to the landing page and the research; unverified
  result lines are marked Approval needed. Quotes are word for word.
- **No em dashes, no bold in scripts, no icons in copy.**
- **Run prettier only on files you changed**, and revert any unrelated reformatting.
- **Test in a browser before merging**: the Playwright harness stubs Supabase and the AI route;
  run every older test too, since new steps (like the Plan pop-up) change old flows.
- **Merges do not reach the live link on their own**: Lovable needs Publish, then Update.
- **Scripts are never cut.** The editor gets every hook, every body line and the CTA:
  - V1 section 2 (Full Script, Clean Voice-Over) and V2 section 2 are built by the app from the
    approved script, not written by the AI.
  - Before a video brief is shown, QA checks every spoken line sits in a VO row with a visual guide.
    If not, the AI is asked once more with the missing lines named. Lines still missing are written
    in, in script order, flagged "Visual guide needed", and the brief shows "Not ready for the video
    editor" with a Fix missing visuals button that writes only those visuals.
  - An AI answer that hit its length limit is an error, never saved half-finished.
  - A brand adaptation that comes back under 70% of the reference length is written again.
  - PDF table rows taller than the space left split across pages; Word rows may split too.
- **No AI fingerprints on the page.** A <br> or other HTML from the AI becomes a real line break
  or is dropped, never printed. No running "BRIEFS FOR EDITORS" header.
- **Naming is the headline and the file name.** The brief's headline, the lists, the footer and
  the downloaded file all use the naming set in Briefs (for example "DCT #031 Doorframe
  Territory.pdf"). The PDF viewer's own toolbar is hidden because it saves under a random name.
- **Never mix types.** Image briefs never show hook, body or CTA. Old Formats plan briefs have no
  `kind` and were typed by format name ("Before / After" is also a static format), so a UGC video
  script was filed as an image. `briefKind` reads the content of such briefs instead.
- **Run `.qa`-style unit checks for exports**: render a very long script to PDF and Word and confirm
  with pdftotext that every line is present.
