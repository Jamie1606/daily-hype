"use client";

import SignOutIcon from "@/icons/svg/sign-out";

export default function SidebarSignOutButton() {
  return (
    <button
      className="ps-4 flex w-full select-none hover:bg-brand-20 transition-all duration-300 py-2 cursor-pointer rounded-lg items-center"
      onClick={() => {
        alert("HELLO");
      }}
    >
      <SignOutIcon width={20} height={20} className="mr-[6px]" color="#000" fill="#000" />
      <span>Sign Out</span>
    </button>
  );
}
