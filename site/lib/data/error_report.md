# Resolution Error: Cannot find module './Features'

## Problem
The error `Cannot find module './Features' or its corresponding type declarations` is occurring in `site/components/landing/index.ts`. 

## Possible Causes
- **Hidden Characters**: There might be non-printable characters in the import statement or the filename.
- **Case Sensitivity**: While Windows is case-insensitive, the TypeScript compiler or the IDE can sometimes get out of sync if a file was renamed from `features.tsx` to `Features.tsx`.
- **Typo**: A subtle typo in the `index.ts` file that is hard to see in some editors.

## Solution Plan
1. Re-write the `index.ts` file to ensure no hidden characters exist.
2. Ensure `Features.tsx` has a proper default export (verified: it does).
3. Explicitly add the `.tsx` extension if resolution continues to fail.
