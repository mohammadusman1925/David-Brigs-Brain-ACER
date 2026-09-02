# Source files

The originals everything else was built from. Kept for provenance. Nothing reads from this
folder at runtime — the working copies live in `mentor/`, `system/` and `reference/`.

| File | Became |
| --- | --- |
| David Brigs Course.pdf | `mentor/transcripts/` — 27 module files |
| Evolve__Video_Script_Prompt.pdf | `system/evolve-video-script-prompt.md` |
| METABOLAE_CREATIVE_ITERATION_OPERATING_SYSTEM.docx | `reference/metabolae/creative-iteration-os.md` |
| METABOLAE_COMPETITOR_ANALYSIS_AND_LIBRARY_MATCHING_PROTOCOL.docx | `reference/metabolae/competitor-analysis-protocol.md` |
| Project_instructions.docx | `reference/metabolae/metabolae.md` |

## Two things worth knowing about these files

**The `.docx` files are not Word documents.** They are plain text with a wrong extension. The
`.pdf` exports sitting beside them were made from that text.

**`Evolve__Video_Script_Prompt.pdf` is not a PDF.** It is a ZIP holding 38 page images plus a
text layer. That is why nothing could read it until the text layer was pulled out.

The working copies are byte-identical to the `.docx` originals. Verified with `cmp`.
