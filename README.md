This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

Run tests with the command

```bash
npm run test
```

or the following to generate coverage report

```bash
npm run test:coverage
```

## Approach

- Put hotel data fetching logic into separate function which could be swapped out with a real api with some minor tweaks (handling async request). Reads data from the provided json file.
- Put sorting logic into custom hook `useHotelList`
- Provide access to data and custom hook using context `HotelListProvider` to prevent prop drilling.
- Only pass UI components necessary data.
- UI components split into small testable components.
- Designed the rating component to take in icon set to prevent duplicate logic for self and star ratings.

## Trade offs

- Could further optimise layout on smaller screen sizes.
- Didn't use next image for image optimization as it had issues with the unsplash random endpoint used when deployed.
- Didn't optimise for a large list of hotels, no pagination.
- Didn't write tests for the context or data fetching file as there was not much logic in there.
