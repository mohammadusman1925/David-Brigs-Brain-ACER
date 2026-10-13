/**
 * Each format has its own shape. A static is written in its format's blocks (a testimonial has a
 * quote, reviewer and bridge, never callouts). A video body runs through its format's beats,
 * between the 3 hooks and the CTA. The mock-up's Format sample uses the same definitions.
 */

export type FormatBlock = {
  label: string;
  /** How many lines the block holds: 1 is a single line, more is a list. */
  lines: number;
  rule: string;
  /** voice: written in the customer's own voice; site: taken from the landing page when it has it. */
  source?: "voice" | "site";
};
export type VideoBeat = { label: string; source?: "voice" };

export const STATIC_LAYOUTS: Record<string, FormatBlock[]> = {
  "Before / After": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Before",
      lines: 3,
      rule: "3 short lines, life before",
    },
    {
      label: "After",
      lines: 3,
      rule: "3 lines, same order, life after",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Us vs Them": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Them",
      lines: 3,
      rule: "what the usual option does",
    },
    {
      label: "Us",
      lines: 3,
      rule: "what this does instead, same order",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Comparison: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Other option",
      lines: 3,
      rule: "3 points",
    },
    {
      label: "This product",
      lines: 3,
      rule: "3 points, same order",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Promo / Offer": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Offer",
      lines: 1,
      rule: "only if live on the site; percentage or deadline, not the price",
      source: "site",
    },
    {
      label: "Reason to buy",
      lines: 1,
      rule: "one line",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Listicle: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "List items",
      lines: 4,
      rule: "3 to 5 items",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Reasons: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Reasons",
      lines: 3,
      rule: "3 to 5 reasons",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Features: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Feature -> Benefit",
      lines: 3,
      rule: "feature, then what it does for her life",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Callout: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Subhead",
      lines: 1,
      rule: "8 words or fewer, connects to the headline",
    },
    {
      label: "Callouts",
      lines: 3,
      rule: "3 to 5 callouts, about 3 to 5 words each",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Press: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Press quote",
      lines: 1,
      rule: "reads like a line from a real article",
      source: "voice",
    },
    {
      label: "Outlet",
      lines: 1,
      rule: "publication name",
      source: "voice",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Social Screenshot": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Post",
      lines: 1,
      rule: "20 to 40 words, reads like a real post",
      source: "voice",
    },
    {
      label: "Handle",
      lines: 1,
      rule: "first name or handle",
      source: "voice",
    },
    {
      label: "Bridge",
      lines: 1,
      rule: "links the post to the product",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Pain Highlight": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Pain lines",
      lines: 3,
      rule: "3 moments she knows",
    },
    {
      label: "Turn",
      lines: 1,
      rule: "the turn to the solution",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Problem / Solution": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Problem",
      lines: 1,
      rule: "the problem in her words",
    },
    {
      label: "Solution",
      lines: 1,
      rule: "what this does about it",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Myths vs Facts": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Myth / Fact",
      lines: 3,
      rule: "3 pairs: Myth | Fact (sourced)",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Testimonial + Review": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Quote",
      lines: 1,
      rule: "15 to 35 words, in the customer's own voice",
      source: "voice",
    },
    {
      label: "Reviewer",
      lines: 1,
      rule: "name, age, place",
      source: "voice",
    },
    {
      label: "Stars",
      lines: 1,
      rule: "rating, if on the site",
      source: "site",
    },
    {
      label: "Bridge",
      lines: 1,
      rule: "one line linking the quote to the product",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Star Rating + Count": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Rating and count",
      lines: 1,
      rule: "exact rating and review count from the site",
      source: "site",
    },
    {
      label: "Review snippet",
      lines: 1,
      rule: "a short review in the customer's own voice",
      source: "voice",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Cost Comparison": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Familiar cost",
      lines: 1,
      rule: "a cost or scene she knows",
    },
    {
      label: "This instead",
      lines: 1,
      rule: "the reframe, no product price",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Ingredients / Inside": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "What is inside",
      lines: 3,
      rule: "item -> what it does",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Bundle Showcase": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "In the bundle",
      lines: 3,
      rule: "3 items",
    },
    {
      label: "Offer line",
      lines: 1,
      rule: "only if live on the site",
      source: "site",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "As Seen In": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Outlets",
      lines: 1,
      rule: "outlet names",
      source: "voice",
    },
    {
      label: "Subhead",
      lines: 1,
      rule: "why it matters",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Question + Quiz": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Answer options",
      lines: 3,
      rule: "3 options she can pick",
    },
    {
      label: "Result line",
      lines: 1,
      rule: "what her answer means",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Statistic + Data": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Big number",
      lines: 1,
      rule: "the number, from the research or site",
      source: "site",
    },
    {
      label: "What it means",
      lines: 1,
      rule: "one line",
    },
    {
      label: "Source",
      lines: 1,
      rule: "where the number comes from",
      source: "site",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  Checklist: [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Red X",
      lines: 3,
      rule: "3 failed fixes: treatment then consequence",
    },
    {
      label: "Green check",
      lines: 1,
      rule: "what this does differently",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Split Screen": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Left side",
      lines: 3,
      rule: "3 lines",
    },
    {
      label: "Right side",
      lines: 3,
      rule: "3 lines, same order",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Urgency / Scarcity": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Deadline or stock",
      lines: 1,
      rule: "only if live on the site",
      source: "site",
    },
    {
      label: "Reason to act",
      lines: 1,
      rule: "one line",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Guarantee Badge": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Guarantee",
      lines: 1,
      rule: "exact guarantee from the site",
      source: "site",
    },
    {
      label: "Subhead",
      lines: 1,
      rule: "what it means for her",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Lifestyle + Text Overlay": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Subhead",
      lines: 1,
      rule: "8 words or fewer",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Benefit Stack": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Benefits",
      lines: 4,
      rule: "3 to 5 benefits",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Warning / Alert Style": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Warning label",
      lines: 1,
      rule: "short alert line",
    },
    {
      label: "Why it matters",
      lines: 1,
      rule: "one line",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Did You Know": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "The fact",
      lines: 1,
      rule: "a sourced fact",
    },
    {
      label: "So what",
      lines: 1,
      rule: "what it means for her",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Quote Card": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Quote",
      lines: 1,
      rule: "10 to 20 words, in the speaker's own voice",
      source: "voice",
    },
    {
      label: "Who said it",
      lines: 1,
      rule: "name and credential",
      source: "voice",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Infographic Style": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Steps or facts",
      lines: 4,
      rule: "3 to 4 short points",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
  "Risk Reversal": [
    {
      label: "Headline",
      lines: 1,
      rule: "8 words or fewer, 3 options",
    },
    {
      label: "Risk removed",
      lines: 1,
      rule: "the fear it removes",
    },
    {
      label: "Guarantee",
      lines: 1,
      rule: "exact guarantee from the site",
      source: "site",
    },
    {
      label: "CTA",
      lines: 1,
      rule: "3 to 6 words, a reason to click",
    },
  ],
};

export const VIDEO_BEATS: Record<string, VideoBeat[]> = {
  Demo: [
    {
      label: "Problem shown",
    },
    {
      label: "Product in hand",
    },
    {
      label: "Step 1",
    },
    {
      label: "Step 2",
    },
    {
      label: "Result on screen",
    },
    {
      label: "Proof",
    },
  ],
  "Feature Breakdown": [
    {
      label: "Setup",
    },
    {
      label: "Feature 1 -> benefit",
    },
    {
      label: "Feature 2 -> benefit",
    },
    {
      label: "Feature 3 -> benefit",
    },
    {
      label: "Why it matters",
    },
  ],
  "Day in the Life": [
    {
      label: "Morning",
    },
    {
      label: "The moment it goes wrong",
    },
    {
      label: "Where the product fits",
    },
    {
      label: "Evening, the difference",
    },
  ],
  "Before / After Story": [
    {
      label: "Before",
    },
    {
      label: "The low point",
    },
    {
      label: "The switch",
    },
    {
      label: "After",
    },
    {
      label: "Proof",
    },
  ],
  "Transformation Story": [
    {
      label: "Who I was",
    },
    {
      label: "Lowest point",
    },
    {
      label: "What I tried",
    },
    {
      label: "What changed it",
    },
    {
      label: "Who I am now",
    },
  ],
  "Educational VSL": [
    {
      label: "The question",
    },
    {
      label: "What most people think",
    },
    {
      label: "What is really going on",
    },
    {
      label: "The mechanism",
    },
    {
      label: "What to do instead",
    },
  ],
  "Authority VSL": [
    {
      label: "Who is speaking and why trust them",
    },
    {
      label: "The problem they see",
    },
    {
      label: "The cause",
    },
    {
      label: "The mechanism",
    },
    {
      label: "The recommendation",
    },
  ],
  "Founder Story": [
    {
      label: "Why I started",
    },
    {
      label: "The problem I lived",
    },
    {
      label: "What I built",
    },
    {
      label: "What customers told me",
    },
    {
      label: "Why it matters now",
    },
  ],
  "Founder / Spokesperson": [
    {
      label: "Who I am",
    },
    {
      label: "The problem",
    },
    {
      label: "Our answer",
    },
    {
      label: "Proof",
    },
  ],
  "UGC / Actor UGC": [
    {
      label: "My situation",
    },
    {
      label: "What I tried",
    },
    {
      label: "What I found",
    },
    {
      label: "What changed",
    },
    {
      label: "Who it is for",
    },
  ],
  "Three Reasons Why": [
    {
      label: "Setup",
    },
    {
      label: "Reason 1",
    },
    {
      label: "Reason 2",
    },
    {
      label: "Reason 3",
    },
    {
      label: "Wrap",
    },
  ],
  "Reason Why": [
    {
      label: "The claim",
    },
    {
      label: "The reason",
    },
    {
      label: "The proof",
    },
    {
      label: "What it means for you",
    },
  ],
  "Customer Interview": [
    {
      label: "Q: What was going on?",
    },
    {
      label: "A: answer in her own words",
      source: "voice",
    },
    {
      label: "Q: What did you try?",
    },
    {
      label: "A: answer in her own words",
      source: "voice",
    },
    {
      label: "Q: What changed?",
    },
    {
      label: "A: answer in her own words",
      source: "voice",
    },
  ],
  FAQ: [
    {
      label: "Question 1",
    },
    {
      label: "Answer 1",
    },
    {
      label: "Question 2",
    },
    {
      label: "Answer 2",
    },
    {
      label: "Question 3",
    },
    {
      label: "Answer 3",
    },
  ],
  "Myth Busting": [
    {
      label: "Myth 1",
    },
    {
      label: "Truth 1",
    },
    {
      label: "Myth 2",
    },
    {
      label: "Truth 2",
    },
    {
      label: "Myth 3",
    },
    {
      label: "Truth 3",
    },
  ],
  "Podcast Format": [
    {
      label: "Host question",
    },
    {
      label: "Guest answer",
    },
    {
      label: "Follow-up",
    },
    {
      label: "The insight",
    },
    {
      label: "The takeaway",
    },
  ],
  "AI Voice + B Roll": [
    {
      label: "Problem over b-roll",
    },
    {
      label: "Agitate",
    },
    {
      label: "Mechanism",
    },
    {
      label: "Product reveal",
    },
    {
      label: "Proof",
    },
  ],
  Unboxing: [
    {
      label: "What arrived",
    },
    {
      label: "First look",
    },
    {
      label: "How it works",
    },
    {
      label: "First use",
    },
    {
      label: "First impression",
    },
  ],
  "Reaction Video": [
    {
      label: "What I am reacting to",
    },
    {
      label: "My first reaction",
    },
    {
      label: "Why it matters",
    },
    {
      label: "What I would do",
    },
  ],
  "I Tried X for 30 Days": [
    {
      label: "Day 1",
    },
    {
      label: "Week 1",
    },
    {
      label: "Week 2",
    },
    {
      label: "Day 30",
    },
    {
      label: "Verdict",
    },
  ],
  "Tutorial / How to": [
    {
      label: "What you will learn",
    },
    {
      label: "Step 1",
    },
    {
      label: "Step 2",
    },
    {
      label: "Step 3",
    },
    {
      label: "Result",
    },
  ],
  "Multi Creator Mashup": [
    {
      label: "Creator 1 line",
      source: "voice",
    },
    {
      label: "Creator 2 line",
      source: "voice",
    },
    {
      label: "Creator 3 line",
      source: "voice",
    },
    {
      label: "Common thread",
    },
    {
      label: "Product",
    },
  ],
  "Skit + Comedy": [
    {
      label: "Setup",
    },
    {
      label: "Escalation",
    },
    {
      label: "Punchline",
    },
    {
      label: "Product as the fix",
    },
  ],
  "Silent + Text on Screen": [
    {
      label: "Text 1: the problem",
    },
    {
      label: "Text 2: the twist",
    },
    {
      label: "Text 3: the fix",
    },
    {
      label: "Text 4: the result",
    },
  ],
  "Man on the Street": [
    {
      label: "Question asked",
    },
    {
      label: "Answer 1",
      source: "voice",
    },
    {
      label: "Answer 2",
      source: "voice",
    },
    {
      label: "Answer 3",
      source: "voice",
    },
    {
      label: "Reveal",
    },
  ],
  "Review Compilation": [
    {
      label: "Review 1",
      source: "voice",
    },
    {
      label: "Review 2",
      source: "voice",
    },
    {
      label: "Review 3",
      source: "voice",
    },
    {
      label: "Common thread",
    },
    {
      label: "Product",
    },
  ],
  "Whiteboard Explainer": [
    {
      label: "The problem drawn",
    },
    {
      label: "The cause",
    },
    {
      label: "The mechanism",
    },
    {
      label: "The result",
    },
  ],
  "Behind the Scenes": [
    {
      label: "Where we are",
    },
    {
      label: "What we make",
    },
    {
      label: "Why we do it this way",
    },
    {
      label: "What it means for you",
    },
  ],
  "Problem Agitation Solution": [
    {
      label: "Problem",
    },
    {
      label: "Agitate",
    },
    {
      label: "Failed fixes",
    },
    {
      label: "Solution",
    },
    {
      label: "Proof",
    },
  ],
  "News Style / Native Ad": [
    {
      label: "Headline news line",
    },
    {
      label: "What happened",
    },
    {
      label: "Why it matters",
    },
    {
      label: "The discovery",
    },
    {
      label: "What readers are doing",
    },
  ],
  "Documentary Style": [
    {
      label: "The scene",
    },
    {
      label: "The problem",
    },
    {
      label: "The search",
    },
    {
      label: "The discovery",
    },
    {
      label: "The outcome",
    },
  ],
  "Talking Head": [
    {
      label: "Point 1",
    },
    {
      label: "Point 2",
    },
    {
      label: "Point 3",
    },
    {
      label: "Bottom line",
    },
  ],
  "Animated Explainer": [
    {
      label: "The problem",
    },
    {
      label: "Why it happens",
    },
    {
      label: "How this works",
    },
    {
      label: "The result",
    },
  ],
  "Side by Side Comparison": [
    {
      label: "Left: the usual way",
    },
    {
      label: "Right: this product",
    },
    {
      label: "Difference 1",
    },
    {
      label: "Difference 2",
    },
    {
      label: "Verdict",
    },
  ],
  "Why I Switched": [
    {
      label: "What I used before",
    },
    {
      label: "Why it failed me",
    },
    {
      label: "What I switched to",
    },
    {
      label: "What changed",
    },
  ],
  "Challenge Format": [
    {
      label: "The challenge",
    },
    {
      label: "Day or round 1",
    },
    {
      label: "Day or round 2",
    },
    {
      label: "The result",
    },
  ],
};

/** Sample text for the Format sample card. */
export const STATIC_SAMPLES: Record<string, Record<string, string | string[]>> = {
  "Before / After": {
    Headline: "Same doorway. Different mornings.",
    Before: [
      "Scrubbing the doorframe at 11pm",
      "Spraying every single night",
      "Dreading the smell at the door",
    ],
    After: [
      "Walking past a dry doorway",
      "Nights without the spray bottle",
      "A home that smells like home",
    ],
    CTA: "See how it works",
  },
  "Problem / Solution": {
    Headline: "It's stress, not spite.",
    Problem: "Your cat sprays the same doorframe every night.",
    Solution: "Calming support that goes wherever your cat goes.",
    CTA: "Find the cause",
  },
  Callout: {
    Headline: "Same doorway. Every night.",
    Subhead: "It's not bad behaviour. It's stress.",
    Callouts: [
      "Started after a change at home",
      "Cleaners remove the smell",
      "Support that moves with your cat",
    ],
    CTA: "See how it works",
  },
  "Testimonial + Review": {
    Headline: "She stopped spraying the door.",
    Quote:
      "Honestly I thought she was doing it to get back at me for bringing Milo home. Two weeks with the collar and the hallway's been dry. I keep checking anyway.",
    Reviewer: "Sarah, 41, Leeds",
    Stars: "5 stars",
    Bridge: "The collar she wore was Gentle Paws.",
    CTA: "Read more reviews",
  },
  Checklist: {
    Headline: "Tried all of these?",
    "Red X": [
      "Enzyme spray: smell gone, spraying back",
      "New litter box: same doorway",
      "Plug-in diffuser: one room only",
    ],
    "Green check": "Calming support she wears all day",
    CTA: "See the difference",
  },
  "Myths vs Facts": {
    Headline: "Spraying isn't spite.",
    "Myth / Fact": [
      "Myth: she's doing it to annoy you | Fact: marking is a stress signal",
      "Myth: cleaning stops it | Fact: cleaning removes smell, not stress",
      "Myth: she'll grow out of it | Fact: stress repeats until it's eased",
    ],
    CTA: "Learn the signs",
  },
  "Us vs Them": {
    Headline: "Your diffuser covers one room.",
    Them: ["Plugs into one wall", "Works where you put it", "Stops at the door"],
    Us: ["Worn by your cat", "Works where she goes", "Covers the whole house"],
    CTA: "Compare now",
  },
  "Statistic + Data": {
    Headline: "37 owners named the same doorway.",
    "Big number": "37",
    "What it means": "Doorway spraying is the most common stress sign in our research.",
    Source: "Reddit and Facebook groups, research Oct 13",
    CTA: "See why",
  },
};
export const VIDEO_SAMPLES: Record<string, string[]> = {
  "Three Reasons Why": [
    "Here's why I stopped scrubbing my doorframe.",
    "One: it works where my cat actually goes, not one room.",
    "Two: no plug, no spray, nothing to remember.",
    "Three: it eased the stress behind the spraying, not just the smell.",
    "That's why it's on her every day now.",
  ],
  "Customer Interview": [
    "What was going on at home?",
    "Every night, same spot by the bedroom door. I'd be on my knees with paper towel at eleven.",
    "What did you try first?",
    "The enzyme spray, a second litter box, the plug-in. The smell went, the spraying didn't.",
    "What changed?",
    "I stopped finding it. It took about two weeks, and I still check out of habit.",
  ],
  "Myth Busting": [
    "Myth one: she's spraying to annoy you.",
    "Truth: marking is how cats show stress.",
    "Myth two: a better cleaner will stop it.",
    "Truth: cleaners remove the smell, not the stress.",
    "Myth three: she'll grow out of it.",
    "Truth: stress repeats until it's eased.",
  ],
  "Problem Agitation Solution": [
    "Every night, the same spot on the doorframe.",
    "You scrub it, it's back by morning.",
    "Enzyme sprays, new litter, plug-ins. Nothing held.",
    "Gentle Paws works where your cat goes.",
    "Owners in our research say the doorway stayed dry.",
  ],
};

export function staticLayout(format: string): FormatBlock[] {
  return STATIC_LAYOUTS[format] ?? STATIC_LAYOUTS["Callout"]!;
}
export function videoBeats(format: string): VideoBeat[] {
  return VIDEO_BEATS[format] ?? VIDEO_BEATS["UGC / Actor UGC"]!;
}

/** Shown in the brief's Claim Flags, never on the ad itself. */
export const CONCEPT_FLAG = "Concept testimonial. Swap in a customer review before launch.";

const VOICE_RULE =
  "Customer-voice blocks (quotes, reviews, posts, interview answers) are written by you, first person, in the customer's own words and rhythm from the research: specific moments, small details, plain grade 4 to 6 language, one honest imperfection or doubt before the turn. Never polished, never salesy, no exclamation marks, no marketing words. A reviewer is a believable first name, age and place. These are concept testimonials for client review, so write them yourself; this overrides any rule above about using only real or verbatim quotes.";

/** The block list the AI must fill for one static format. */
export function staticFormatInstruction(format: string) {
  const blocks = staticLayout(format);
  return `FORMAT BLOCKS for "${format}". Write every variation in exactly these blocks, in this order, and no others (no callouts or subhead unless listed):
${blocks
  .map(
    (b) =>
      `- ${b.label}: ${b.lines > 1 ? `${b.lines} lines` : "1 line"}. ${b.rule}${b.source === "site" ? " Use the landing page's value when it has one." : ""}`,
  )
  .join("\n")}
${blocks.some((b) => b.source === "voice") ? VOICE_RULE : ""}
The Headline block has 3 options in "headlines". The CTA goes in "cta". Every other block goes in "blocks" as {"label","lines":[...]}.`;
}

/** The beats one video format's body must run through. */
export function videoBeatInstruction(format: string) {
  const beats = videoBeats(format);
  return `BODY BEATS for "${format}". The body runs through these beats in order, one or more spoken lines per beat:
${beats.map((b, i) => `${i + 1}. ${b.label}`).join("\n")}
${beats.some((b) => b.source === "voice") ? VOICE_RULE : ""}
Return each body line as {"beat":"<beat name>","line":"<spoken line>"}.`;
}

export function hasVoiceBlocks(kind: "Image" | "Video", format: string) {
  return kind === "Image"
    ? staticLayout(format).some((b) => b.source === "voice")
    : videoBeats(format).some((b) => b.source === "voice");
}
