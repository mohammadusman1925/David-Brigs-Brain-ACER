# Research to Briefs: the baseline

This is the reference for any rebuild of Research to Briefs, whether in this Lovable app, in our own
app, or in a new codebase. Start here. It records what the product does, how it must look and
behave, and every mistake already made so it is not made again.

- Live app: Swipe Intel, route `/scaling` (repo `mohammadusman1925/swipe-intel-pro`).
- Approved design: the mock-up at https://claude.ai/artifact/FuHRvVAUmFyebvYQBoxRpE. It is the
  design source of truth. Its "What changed in the live app" log lists every round, newest first.
- Detail on data storage and the rules learned so far: `rules-and-data.md` next to this file (copy of `docs/research-to-briefs.md` in the app repo).

---

## 1. What it is for

A team goes from customer research to editor-ready briefs in one place:
research, then angles, then drafts they approve, then briefs a video editor, designer or copywriter
can work from without asking questions. The final file must be complete, named correctly, and must
not look AI-made.

## 2. The flow, seven steps

1. **Research.** Links and uploaded files for one product. Analyze with Claude, ChatGPT or Gemini.
   Each research is saved and listed in a Research dropdown with filters (All, This week, Last
   week, This month) and "Name this research". "+ New research" starts a standalone research and
   shows nothing from the old one.
2. **Analysis.** Common desire, evidence (desires, pains, frustrations, fears, with quotes word for
   word and counts) and 10 to 20 angle cards, each with concepts. More angles, regenerate one,
   more concepts.
3. **Creative Production.** One research holds several creative productions. Each production is
   standalone: its own ticked angles, drafts, settings and briefs. The team can start at "+ New
   creative production", tick angles right there, and never open Analysis.
   - What: Video scripts, Image ads, Long-form copy.
   - How: Write from angles, Brand adaptation (levels 1:1 DNA, Close, Moderate), Brand inspo.
   - Video bucket (how it is produced): UGC, Founder POV, Testimonial video, Edited video, Short
     VSL, Long-form VSL, AI VSL, YouTube Shorts, Simple video, Static video. Brands can add their
     own buckets and formats. Then a format from that bucket.
   - Image: bucket is always Static, 35 static angle types, 3 headlines per static.
   - Outputs per angle, 1 to 6, planned in the Variation plan pop-up: Different formats, Different
     concepts, Same concept different angles, Different POV, Custom. Each row is editable
     (format, narrator, concept). Every output is told what the others say; overlapping openings
     are marked Too similar.
   - References: video upload or link (Gemini reads script and visuals), pasted script, image
     upload or link, long-form text or page link. Option A keeps the reference's bucket and
     format, Option B uses our own.
   - A draft whose format, bucket or angle type changed after writing is Out of date and cannot be
     approved until regenerated.
   - Each draft: Regenerate, Edit, New hooks only (video), Approve, Move to storage, Delete. The
     list: Move all to storage, Delete all.
   - The AI that writes is picked for this step only.
4. **Briefs.** A summary, not an editor. Choices made in Creative Production are final here.
   Template (Full Editor Brief V1, Gentle Paws Video Brief for Gentle Paws only, Hook Iteration V2,
   Static Brief, Primary Text + Headlines, Long-form Copy Brief, or an uploaded skill), file
   naming, DCT start number. Every approved output has a tick box, all ticked by default; only
   ticked ones get a brief.
5. **Create & Export.** Only the active production, and only the type picked in Briefs. Video,
   image and long-form never share a screen. Per brief: Preview, QA, Edit brief, Save, View PDF,
   Word, PDF, Move to storage, Delete, and for statics Generate image in Creative Studio. For the
   type: All in one Word or PDF (contents page, each brief on its own pages), Move all to storage,
   Delete all.
6. **Storage.** Only the current brand. Everything saved by day and type, which production it came
   from, and a "Moved to storage" type with Bring back.
7. **History & Summary.** Only the current brand.

A sticky save bar shows save state, Start over (two clicks) and Save.

## 3. What each type contains, and nothing else

| Type | Contains | Never contains |
| --- | --- | --- |
| Video scripts | Hooks (usually 3), body lines, CTA, VO and Visual Guide tables | Headlines, statics |
| Image ads | Code, angle type, format, 3 headlines (8 words or fewer), subhead, callouts, CTA | Hooks, body, VO, production notes, price |
| Long-form | Main idea, lowest point, failed fixes, bridge, mechanism, turning point, draft, 12-section brief | Hooks, VO, video buckets |

## 4. The video brief must be ready to send to an editor

- The clean voice-over section is built by the app from the approved script: Hook 1, Hook 2,
  Hook 3, the full body, the CTA. The AI never writes or shortens it.
- QA runs before the brief is shown. Every spoken line must sit in a VO row with a visual guide
  beside it. If not, the AI is asked once more with the missing lines named. Lines still missing
  are written in, in script order, marked "Visual guide needed", and the brief shows "Not ready for
  the video editor" with Fix missing visuals (writes only those visuals).
- An AI answer that hit its length limit is an error, never saved half-finished.
- A brand adaptation shorter than 70% of the reference script is written again.
- PDF table rows taller than the page split across pages. Word rows may split. Nothing is clipped.

## 5. Files

- The headline, the list label, the page footer and the file name are all the naming set in
  Briefs, for example `DCT #031 Doorframe Territory.pdf`. Never the AI's own title, never a random
  name. DCT numbers are counted across all productions so they never repeat.
- No running header such as "BRIEFS FOR EDITORS". No `<br>` or other HTML printed as text.
- No em dashes, no bold, no double quotation marks in scripts. No icons in copy.
- The PDF viewer's own toolbar is hidden; downloads go through our buttons so the name is right.

## 6. Look

- Follow the mock-up exactly: Fraunces for titles, Instrument Sans for text, JetBrains Mono for
  small labels, numbered step cards (STEP n · DONE), sticky save bar, one Product card with
  Product, Research and Verified landing page.
- The brief page itself: white page, teal eyebrow, navy title, dark table headers.
- Works at 400px width with no sideways scroll.

## 7. Data

- One research = one `scaling_sessions` row. Everything else lives in `brief_config` (jsonb):
  `productions[]` with `activeProductionId`, each `{ id, name, createdAt, state }`; a
  `production` mirror for older readers; `skipItems` for unticked outputs.
- Briefs in `scaling_sessions.briefs[]`, each with `productionId`, `kind`, `template`,
  `sourceItemId`, `fileName`.
- `storedAt` on a draft or brief means moved to storage: hidden from working screens, listed in
  Storage, removed by Bring back.
- Old briefs without `kind` are typed by their content, never by format name.

## 8. AI

- One route, `/api/public/ai`, for Claude, ChatGPT and Gemini. Video files go to Gemini.
- Claude allows the longest answers (32000 tokens at high effort). Gemini gets an explicit output
  limit. Cut-off answers from any model raise a clear error.
- Never invent claims. Claims come from the landing page and the research; anything else is
  marked Approval needed. Quotes are word for word.

## 9. Mistakes already made. Do not repeat them.

1. Shipped features in the old look. The design must match the mock-up, not only the features.
2. Shipped the mock-up's review labels ("New", "Changed", "Proposed"). They are notes, not UI.
3. Forgot to update the mock-up after a change. Update it every round, with a dated log entry.
4. Showed video fields (hooks, VO) on image and long-form. Each type shows only its own fields.
5. Mixed video and image briefs on one screen. One type per screen.
6. Typed old briefs by format name, so a video script showed as an image ad.
7. A new research or production still showed old data, and another brand's history showed up.
   Standalone means nothing carries over; another brand never appears.
8. Scripts were cut: PDF rows drawn off the page, Word rows that could not split, AI answers cut by
   length limits, the AI shortening the VO. See section 4.
9. Printed AI `<br>` tags and a repeated "BRIEFS FOR EDITORS" header.
10. Used the AI's title as the headline and let the PDF viewer save under a random name.
11. Ran prettier on whole files and reformatted code nobody touched. Format only changed lines,
    and revert unrelated churn.
12. Merged without running the older tests; new steps (like the Plan pop-up) broke old flows.
13. Assumed a merge was live. Lovable needs Publish, then Update.
14. Hid formats and counts the user could not find. Say where a control lives before adding a
    second copy of it.

## 10. How we work on it

- Read the live app and the mock-up before changing anything.
- Ask before starting: summarise what will change in bullet points and wait for a yes.
- Plain English, no em dashes, no icons. Be direct about what is wrong and what is risky.
- Test in a browser before merging (Playwright harness that stubs Supabase and the AI route), plus
  unit checks that render a very long script to PDF and Word and confirm every line is present.
- Merge by pull request, update the mock-up and `docs/research-to-briefs.md` in the same round,
  then remind the user to Publish, then Update.
- Report what was wrong, what changed, and what is still weak.
