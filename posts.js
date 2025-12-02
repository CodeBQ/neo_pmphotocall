// posts.js

const BLOG_POSTS = [
  {
    slug: "zeiss-ikonta-35mm-advance",
    title: "Manual Frame Advance for 35mm Film in a Zeiss Ikonta 512/2",
    category: "Film",
    readTime: "5 min read",
    excerpt:
      "Notes on loading 35mm film into a Zeiss Ikonta 512/2 and using manual advance turns for panoramic images through the sprockets.",
    preview: `This is a practical experiment: loading 35mm film into a Zeiss Ikonta 512/2 (a 6×9 camera) to get a wide panoramic strip that includes the sprockets. Because there’s no 35mm frame counter, we advance by counting knob turns after each shot.
  
  These turn values are not an exact science or a guarantee of perfect spacing, just a starting point you can refine with your own tests.`,
    body: [
      `This article is about using 35mm film in a Zeiss Ikonta 512/2, which is normally a 6×9 medium-format camera. By loading 35mm into it, you get a long panoramic image that stretches across the full 6×9 gate and even exposes the sprocket area. It’s a fun hack, but it also means you lose the usual frame numbering and have to manually control spacing between shots.`,

      `In this setup I’m using a 24-exposure 35mm canister. Because the camera was never designed for this film size, the only way to keep some kind of frame separation is to advance the film by counting turns of the advance knob. These numbers are based on my own test roll and should be treated as a rough guide, not a precision formula. Different cameras, take-up tension, and even how tightly the film is rolled can change things.`,

      `Load the film in the dark or in a changing bag so you don’t lose the first frame. Once the 35mm is secured on the take-up side and everything is closed, we’ll call the starting position “frame 0”. From there, we advance the film by a certain number of full turns of the advance knob after each exposure, watching only the turn count rather than relying on any red window or markings.`,

      `Here are the turn values I used for a 24-exposure roll:`,
      `1 – 2.5 turns`,
      `2 – 2.5 turns`,
      `3 – 2.25 turns`,
      `4 – 2.25 turns`,
      `5 – 2 turns`,
      `6 – 2 turns`,
      `7 – 2 turns minus one “hour”`,
      `8 – 2 turns minus one “hour”`,
      `9 – 1.75 turns`,
      `10 – 1.75 turns`,

      `The “hour” notation is just a way of describing a fraction of a full turn, like looking at a clock face. For example, “2 turns minus one hour” means almost two full rotations, but stopped a little early.`,

      `Because this method depends so much on friction and how tightly the film packs onto the spool, you should expect some overlap or extra spacing here and there. Think of this as a starting recipe: shoot a test roll, note where frames overlap or drift apart, and adjust your turn counts for your specific camera. That’s part of the charm of this kind of DIY panoramic setup — it’s experimental, imperfect, and very much hands-on.`,

      `If you try this with your own Zeiss Ikonta (or another 6×9 camera), treat these numbers as a loose guide and not a promise. Take notes, mark your frames, and refine your own table of turns. Over time you’ll end up with a personalized chart that gives you the spacing you like for your particular camera and shooting style.`,
    ],
  },
  {
    slug: "why-35mm-film",
    title: "Why I Still Shoot 35mm Film in a Digital World",
    category: "Film",
    readTime: "5 min read",
    excerpt:
      "Film slows me down and changes the way I see. Here’s how that affects my process.",
    preview: `Film makes every frame a small decision...`,
    body: [
      `Digital cameras are incredible...`,
      `Because I can’t chimp the back...`,
      `The delay between shooting and seeing...`,
    ],
  },
  {
    slug: "home-portrait-setup",
    title: "Building a Simple Home Portrait Setup",
    category: "Gear",
    readTime: "6 min read",
    excerpt:
      "You don’t need a full studio to make flattering portraits — here’s my minimal setup.",
    preview: `My basic home setup is a big window...`,
    body: [
      `A home portrait setup doesn’t need to be complicated...`,
      `I place the subject close to the window...`,
      `Instead of constantly moving lights...`,
    ],
  },
];
