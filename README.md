
# Fanpage — Build It. Love It. Get It.

> Ship a small project dedicated to something you love (snack/game/hobby/etc.).  
> When you finish, you get that very thing shipped as a reward

Checkout: https://fanpage-ysws.vercel.app/


Repo: https://github.com/nirvaankohli/fanpage-ysws

---

## 🧰 Tech Stack

- **Vite** (React + TypeScript)
- **React 18**
- **Tailwind CSS** (+ shadcn/ui)
- **GSAP** (cursor animation)
- **motion/react** (tilt interactions)
- **Lucide Icons**

---

## 📁 Project Structure (key files)

```

fanpage/
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
├─ tailwind.config.ts
├─ postcss.config.js
├─ public/
│  ├─ fanpage-icon.png
│  └─ grain.svg
└─ src/
├─ main.tsx
├─ App.tsx
├─ index.css
├─ lib/
│  └─ utils.ts      
├─ brand/
│  └─ Background.tsx   
├─ components/
│  ├─ bits/
│  │  ├─ TargetCursor.tsx
│  │  └─ TiltedCard.tsx
│  └─ ui/
│     ├─ button.tsx
│     ├─ card.tsx
│     └─ accordion.tsx

```

I might have missed something(its a pain to make these maps)

---

## Getting Started (Windows(ik, don't harass me) + npm)

From the `fanpage` directory(cd there):

```
# install dependencies
npm ci

# run dev server
npm run dev

# type-check (no emit)
npm run typecheck

# production build
npm run build

# preview local build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) during development.

---

## 🔗 In-Page Links

Buttons/links go to:

* `#how-it-works`
* `#rules`
* `#faq`
* The **Submit** button intentionally points to a Rickroll (going to be a submit form).

Make sure your clickable elements you want the cursor to “magnetize” have the attribute:

```
data-cursor-snap
```

---

## ⚙️ Vercel Deployment

**Project Settings → Build & Output**

* **Root Directory:** `fanpage`
* **Install Command:** `npm ci`
* **Build Command:** `npm run build`
* **Output Directory:** `dist`

**CLI (from `fanpage/`)**

```powershell
npm run build
npx vercel
npx vercel --prod
```

(It took me 9 attempts to actually successfully deploy it 😭)
---

## 📝 Coding Notes

* Path alias is configured: `@` → `./src`. See `vite.config.ts` and `tsconfig.json` (`compilerOptions.paths`).

* The `cn` utility lives at `src/lib/utils.ts`:

  ```ts
  import { type ClassValue, clsx } from "clsx";
  import { twMerge } from "tailwind-merge";
  export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
  ```

* **TargetCursor**: snaps to `data-cursor-snap` elements; adjusts corners via GSAP; hides the OS cursor by default.
---

## Credits & Acknowledgements

* **ReactBits** — components & patterns

  * Site: [https://reactbits.dev/](https://reactbits.dev/)
  * Used/concepts: Target Cursor, Tilted/Tilt Cards, Circular Text / text animations (adapted)
* **shadcn/ui** 

  * [https://ui.shadcn.com/](https://ui.shadcn.com/)
* **Tailwind CSS** — utility-first styling

  * [https://tailwindcss.com/](https://tailwindcss.com/)
* **Vite** 

  * [https://vitejs.dev/](https://vitejs.dev/)
* **GSAP** — animation engine for the cursor

  * [https://gsap.com/](https://gsap.com/)
* **motion/react**

  * [https://motion.dev/](https://motion.dev/)
* **Lucide Icons** — icon set

  * [https://lucide.dev/](https://lucide.dev/)
* **Radix UI Primitives** (via shadcn/ui)

  * [https://www.radix-ui.com/](https://www.radix-ui.com/)
* **Hack Club Hackatime** (mentioned in Rules/How-it-works copy)

  * [https://hackatime.hackclub.com/](https://hackatime.hackclub.com/)

---

## 📄 License

MIT © 2025 Nirvaan Kohli
See `LICENSE` (add one if not present). Third-party libraries retain their own licenses.

---

## 🤝 Contributing

PRs are welcome(it makes me feel famous)!
Please keep the style consistent (TypeScript, Tailwind, shadcn/ui) and run:

```

npm run typecheck
npm run build

```

before opening a PR.

