# Two Minds Two Passions

A front-end web project built for a school UX Design assignment. This project showcases a unique dual-theme design, exploring two distinct passions: **Volleyball** and **Chess**. 

## Concept

"Two Minds Two Passions" is a single website with two entirely different visual identities and themes. By clicking the toggle switch in the footer or using the navigation links, users can flip the site between two modes:
- 🏐 **Volleyball Mode**: A vibrant, high-energy light theme focusing on the power and athleticism of volleyball.
- ♟️ **Chess Mode**: A sleek, focused dark theme centered around the calculated strategy and intellect of chess.

The project demonstrates how UX, UI, and styling can drastically change the mood and messaging of a digital interface while maintaining the same underlying HTML structure.

## Features

- **Dynamic Theme Switching:** Custom JavaScript that instantly updates CSS variables (`var(--primary)`, `var(--surface)`, etc.) to shift between light and dark modes.
- **Responsive Layout:** Built with Bootstrap 5 to ensure a seamless experience across desktop and laptop screens.
- **Clean UI:** A modern, minimalist aesthetic featuring Apple HIG-inspired typography and smooth CSS transitions.
- **Vanilla Stack:** Developed entirely with vanilla HTML, CSS, and JavaScript—no heavy frameworks or build tools required.

## Project Structure

- `index.html` - The main landing page featuring hero sections, athlete profiles, and dynamic content.
- `about.html` - Details the mission and purpose of the website.
- `chess_matches.html` - A dedicated page for viewing chess match schedules and results.
- `join_us.html` - A contact/signup page for joining the community.
- `css/styles.css` - Contains all custom CSS tokens, mode-switching logic, and overrides.
- `js/main.js` - Handles the state management (localStorage) and event listeners for the mode toggle.

## How to Run

Because this is a vanilla front-end project, no build steps are required. 
Simply open `index.html` in any modern web browser to view the site, or run a local development server (e.g. `python -m http.server` or VS Code Live Server) to view it locally.

## UX Design Principles

This project practically applies several core UX frameworks to enhance usability and aesthetics:
- **Gestalt Principles**: Utilizes *Common Region* in the 3D flip cards (grouping content within styled borders) and *Similarity* in the striped chess data tables.
- **Nielsen's Heuristics**: Applies *Match Between System & Real World* with the physical-style theme toggle switch, and *Error Prevention* in the "Join Us" form via native validation and strict input types.
- **Material Design**: Uses *Intentional Motion* for the dynamic hero spotlight tracking the user's cursor, and physical metaphor behaviors for the 3D flip cards.
- **Apple HIG**: Establishes *Depth* through the interactive spotlight masking layer, and *Clarity* via the sticky navigation bar, ensuring core content and escape routes are always visible.

## AI Usage

The images in this project were generated using AI with the following prompts:

### Hero Image (Chess)
```text
A single black chess knight piece centered on a dark textured surface,
photographed in a cinematic studio environment. The piece is crafted from
dark matte wood with subtle grain texture, featuring a sculpted horse head
with a detailed carved mane rendered as small ridge-like notches running
along the back of the neck. The piece sits on a multi-tiered cylindrical
base with stepped ring detailing.
Lighting: A single narrow spotlight illuminates from directly above, casting
a soft circular pool of warm-cool light on the surface directly beneath the
piece. The base catches the most direct light while the upper horse head
remains in deep shadow with only faint rim definition visible. The background
is near-total black, devoid of detail. A soft volumetric mist drifts upward
behind and above the piece, subtly catching the spotlight and creating a
diffused glow in the upper-center of the frame. The shadow of the piece is
cast forward-left across the surface, soft-edged and elongated.
Mood: Dark, dramatic, mysterious, minimalist. Cinematic high-end product
photography aesthetic.
Technical: Photorealistic, 8K, shallow depth of field, medium format lens,
neutral dark tone with no color grading, LANDSCAPE orientation,
16:9 aspect ratio, 1200×675px or 1000×563px, subject centered with
generous black negative space on both left and right sides for potential
text overlay in hero banner.

```

### Hero Image (Piano)
```text
A single black grand piano centered on a dark textured surface,
photographed in a cinematic studio environment. The piano is crafted from
high-gloss lacquered black wood with a mirror-like reflective surface that
catches subtle ambient light. The lid is propped open at full extension,
revealing the interior strings and hammers in near-darkness. The curved body
of the grand piano faces left, with the keyboard visible but unlit, keys
fading into shadow.
Lighting: A single narrow spotlight illuminates from directly above, casting
a soft circular pool of warm-cool light on the surface directly beneath the
piano. The lacquered body catches the most direct light as a sharp specular
highlight running along the curved lid edge, while the interior and keyboard
remain in deep shadow with only faint rim definition visible. The background
is near-total black, devoid of detail. A soft volumetric mist drifts upward
behind and above the piano, subtly catching the spotlight and creating a
diffused glow in the upper-center of the frame. The shadow of the piano is
cast forward-left across the surface, soft-edged and elongated.
Mood: Dark, dramatic, mysterious, minimalist. Cinematic high-end product
photography aesthetic.
Technical: Photorealistic, 8K, shallow depth of field, medium format lens,
neutral dark tone with no color grading, LANDSCAPE orientation,
16:9 aspect ratio, 1200×675px or 1000×563px, subject centered with
generous black negative space on both left and right sides for potential
text overlay in hero banner.

```

### Explore Section Image (Chess)
```text
An aerial top-down view of a monumental life-sized chess board set within
a grand stone courtyard or coliseum-like structure. The board is composed
of large alternating dark and light marble stone tiles — dark tiles are
deep charcoal-grey with visible surface cracks, veining, and weathering;
light tiles are off-white cream marble with natural fossil-like inclusions,
scratches, and aged patina. Each tile is slightly uneven with chipped edges,
giving the board a ancient, worn, architectural feel.
Chess pieces: A mid-game or post-battle arrangement of chess pieces scattered
across the board in disarray — mix of standing and toppled pieces. Pieces are
rendered in three distinct materials: matte black (ebony), warm dark walnut
brown, and aged ivory/cream wood. Piece types visible include pawns, knights,
bishops, rooks, kings, and queens in various positions. Several pieces are
knocked over and lying flat on the tiles. No strict formation — chaotic
battlefield arrangement.
Architecture: Thick classical stone columns with tiered cylindrical bases
line all four edges of the board, cropped at frame edges as if the camera
floats directly above center. Columns are off-white limestone with rough
chiseled texture. Column bases are square-footed. Partial brick wall visible
at the very top edge of the frame, same aged stone material.
Lighting: Strong directional sunlight entering from the upper-right at
approximately 45 degrees, casting long sharp diagonal shadows from every
column base and standing chess piece across the marble tiles. Shadow lines
are crisp, parallel, and dramatic — spanning multiple tiles. The lighting
creates high contrast between the sunlit cream tiles and the shadow-darkened
areas. Some tiles are fully in shadow; others catch full direct sunlight
with specular highlights on the polished marble surface.
Camera: Directly overhead bird's-eye view, slightly wide angle, no
perspective tilt, centered composition. Portrait crop.
Mood: Epic, ancient, cinematic, monumental. Like a god looking down at
a battle frozen in time.
Technical: Photorealistic 3D render or CGI, 8K detail, sharp focus across
entire frame, no depth-of-field blur, neutral natural daylight color grading,
portrait orientation, 800×1000px aspect ratio (4:5).

```
