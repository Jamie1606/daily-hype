"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import url from "@/constant/url";

export default function BannerButton() {
  const router = useRouter();

  return (
    <Button className="max-w-36" variant="primary" onClick={() => router.push(url.SIGNIN)}>
      Explore Now
    </Button>
  );
}
