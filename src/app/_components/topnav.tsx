"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between  border-b p-4 text-xl font-semibold ">
      <div className="div">Gallery</div>

      <div className="div">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* <div className="div">Sign In</div> */}
    </nav>
  );
}
