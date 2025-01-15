import { RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export function Header() {
  return (
    <header>
    <SignedOut>
        <RedirectToSignIn />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
  )
}
