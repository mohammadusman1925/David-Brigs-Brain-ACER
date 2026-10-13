# Research to Briefs: the baseline

This is the reference for any rebuild of Research to Briefs, whether in this Lovable app, in our own
app, or in a new codebase. Start here. It records what the product does, how it must look and
behave, and every mistake already made so it is not made again.

- Live app: Swipe Intel, route `/scaling` (repo `mohammadusman1925/swipe-intel-pro`).
- Approved design: the mock-up at https://claude.ai/artifact/FuHRvVAUmFyebvYQBoxRpE. It is the
  design source of truth. Its "What changed in the live app" log lists every round, newest first.
- Detail on data storage and the rules learned so far: `docs/research-to-briefs.md`.

---

## 1. What it is for

A team goes from customer research to editor-ready briefs in one place:
research, then angles, then drafts they approve, then briefs a video editor, designer or copywriter
can work from without asking questions. The final file must be complete, named correctly, and must
not look AI-made.

## 2. Tasks, then the seven steps

Work is organised in **tasks**. A task is one research (one `scaling_sessions` row) with its
creative productions inside. The Tasks panel sits on the left of the page (a Task dropdown above
the steps on narrow screens):

- **+ New task** asks for a name first; Create task stays disabled until there is one. Start over
  opens the same box. Every task is named so teams never mix up each other's work.
- Tasks are numbered by age (Task 1 is the oldest), newest on top, each with name, date, the step
  it was left on and who started it. Filters: All, This week, Last week, This month.
- Clicking a task loads the latest saved copy (a teammate's changes included) and opens it at the
  step it was left on. The open task expands to its 7 steps (done ones ticked, click to jump) and
  its creative productions, with Rename and Delete (second click to confirm).
- Only the current brand's tasks show.


1. **Research.** The card at the top names the open task. Links and uploaded files for one
   product. Analyze with Claude, ChatGPT or Gemini. A new task starts clean and shows nothing from
   another task.
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
| Image ads | Code, angle type, format, 3 headlines (8 words or fewer), the format's own blocks, CTA | Hooks, body, VO, production notes, price |
| Long-form | Main idea, lowest point, failed fixes, bridge, mechanism, turning point, draft, 12-section brief | Hooks, VO, video buckets |

## 3a. Research is saved once and used everywhere

- **Research library**: Save research (in a task) or + Add research (Dashboard or in a task)
  stores links, pasted research and the full analysis as a `scaling_sessions` row with
  `status = "library"` (`src/lib/researchLibrary.ts`). Shared with the team, this brand only.
  Deleting a task never deletes it; only Delete in the library does (second click).
- **Dashboard**: a Saved research table. Click one for a pop-up with the common desire, counts,
  angles, sources and the tasks using it, plus Use in new task, Add to open task, Rename, Delete.
  The Dashboard hands the choice to Research to Briefs through sessionStorage.
- **New task**: start with New research, or Use existing research (library or another task) and
  go straight to Creative Production or Analysis, with no re-analysis.
- **Research for this task** card on Research: its select reads "Now: <research> · N angles",
  switches to saved or another task's research (asks first if the task already has an
  analysis), Save research, + Add research. The task records `brief_config.researchFrom` and
  copies the research in, so work in a task never changes the saved one; Refresh from saved
  research pulls in updates.
- On Analysis and Creative Production the research is one line: "Research: <name> · N angles",
  Save research, Change. Change opens a pop-up that warns before it replaces anything.
- Pickers list this product's research first; research saved for another product is grouped
  under "Other products (check before using)".
- **Choices carry over.** The angles ticked in Analysis are the task's shortlist
  (`brief_config.shortlist`). Analysis always shows it, whichever production is open. Every new
  production starts with it ticked, plus each angle's concept and format, and says so in a note;
  unticking there changes that production only. Changing the shortlist updates the open
  production only when it has no approved drafts. Save research stores the shortlist, and a new
  task from that research starts with it. Research with no shortlist opens in Analysis, never
  in Creative Production with nothing ticked. Older tasks use their first production's picks.
- Library rows never appear as tasks, in Storage or in History.

## 3b. Every format has its own shape

`src/lib/formatLayouts.ts` defines all 32 static formats (blocks) and all 36 video formats (body
beats). The mock-up's Format sample uses the same definitions.

- Statics are written in their format's blocks only: Testimonial + Review is Headline (3 options),
  Quote, Reviewer, Stars, Bridge, CTA; Checklist is Red X and Green check; Problem / Solution is
  Problem and Solution. No callouts unless the format has them.
- Video bodies run through their format's beats between the 3 hooks and the CTA: Three Reasons
  Why is Setup, Reason 1, 2, 3, Wrap; Myth Busting is myth and truth pairs.
- A Format sample card in Creative Production shows any format's blocks or beats before writing.
- Customer-voice blocks (quotes, reviews, posts, interview answers) are written by the AI in the
  customer's own words from the research, organic, with a believable name, age and place. They
  are concept testimonials for client review: the ad stays clean, and the brief carries one
  Concept note, "Swap in a customer review before launch".
- The static brief's Format Content table is built by the app from the approved static. QA checks
  every block of the format is filled and no block from another format slipped in. The editor
  brief's clean VO shows the beats.

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

## 4b. Every brief opens with a Brief overview

A table under the title, before the template's own sections, on every template (video, static,
primary text, long-form, hook iteration). Built by the app from saved data, never invented;
anything missing reads N/A, and QA flags any N/A except Ad inspo.

Angle · Angle idea (concept use case and scenario) · Avatar · Problem (the angle's villain) ·
Awareness stage · Funnel (Unaware and Problem Aware TOF, Solution and Product Aware MOF, Most
Aware BOF) · Sophistication level (Schwartz 1 to 5 from Analysis, else estimated by the brief
writer and marked so) · Angle type (the emotional angle: Transformation, Nostalgia, Relief...) ·
Format and Bucket (from Creative Production) · Hypothesis (why we test this output) · Ad inspo
(reference link, file name or "Pasted script", N/A when written from angles) · Landing page (our
product's verified page; if none is saved, Briefs asks for it before generating).

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
- Tasks: `title` is the task name; `brief_config.lastStep` (1 to 7) and `brief_config.owner` are
  saved with it. Older sessions without a name show as "Untitled task, date".
- `storedAt` on a draft or brief means moved to storage: hidden from working screens, listed in
  Storage, removed by Bring back.
- Old briefs without `kind` are typed by their content, never by format name.

## 8. AI

- One route, `/api/public/ai`, for Claude, ChatGPT and Gemini. Video files go to Gemini.
- Claude allows the longest answers (32000 tokens at high effort). Gemini gets an explicit output
  limit. Cut-off answers from any model raise a clear error.
- Never invent claims. Claims come from the landing page and the research; anything else is
  marked Approval needed. Quotes keep the customer's exact words, translated into English when
  the source is in another language.
- **English only, every brand, every market.** Every AI answer and every line of text on a
  generated image is in English, even for a Swedish brand or a Swedish landing page. The rule
  (`ENGLISH_ONLY`) is added in `chatComplete` in `src/lib/aiProviders.server.ts`, the one
  function every text AI call goes through, and to both image routes. Product names, brand names
  and prices stay exactly as written. Data saved before the rule stays as it was: re-run the
  analysis or auto-fill to get it in English.

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
15. Image briefs had no strategy context (avatar, awareness, funnel, hypothesis, links). Every
    brief opens with the Brief overview.
16. A list copy of a task was used to reopen it, so saved analysis looked lost. Always load the
    task fresh before opening it, and never let the list hold the same task twice.
17. Every static was forced into one shape (headline, subhead, callouts, CTA), so a testimonial's
    quote landed in callouts. Each format has its own blocks and each video format its own beats.
18. Research lived only inside a task, so it was redone for every task and lost when a task was
    deleted. Research is saved once in the library and used by any task.
19. The research pickers were greyed out when their list was empty, and the New task list left
    out the open task, which is the research a new task most often reuses. Pickers are always
    clickable, say what to do when empty, and the open task's research is offered (marked
    "open now").
20. The angles ticked in Analysis belonged to whichever production was open, so a new
    production, a new task from saved research, and Analysis with another production open all
    showed nothing ticked, and the team had to pick everything again. Choices made once carry
    forward: one shortlist per task, copied into every new production and saved with research.
21. The English rule lived only in Creative Studio's prompts, so a Swedish brand's auto-fill,
    research and briefs came back in Swedish. Rules that apply to everything go in the one shared
    AI function, not in each feature's prompts.

## 10. How we work on it

- Read the live app and the mock-up before changing anything.
- Ask before starting: summarise what will change in bullet points and wait for a yes.
- Plain English, no em dashes, no icons. Be direct about what is wrong and what is risky.
- Test in a browser before merging (Playwright harness that stubs Supabase and the AI route), plus
  unit checks that render a very long script to PDF and Word and confirm every line is present.
- Merge by pull request, update the mock-up and `docs/research-to-briefs.md` in the same round,
  then remind the user to Publish, then Update.
- Report what was wrong, what changed, and what is still weak.
