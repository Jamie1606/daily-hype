import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col px-20 mt-16">
      <label className="text-lg tracking-wider font-semibold">DAILYHYPE</label>
      <div className="flex justify-start mt-6 mb-5">
        <div className="flex flex-col text-slate-600 text-[15px] space-y-2">
          <Link href="">About Us</Link>
          <Link href="">Payment Methods</Link>
          <Link href="">How to Buy</Link>
          <Link href="">Return and Refund</Link>
        </div>
        <div className="flex flex-col ms-40 text-slate-600 text-[15px] space-y-2">
          <Link href="">Feedback</Link>
          <Link href="">Help and Support</Link>
          <Link href="">Contact Us</Link>
        </div>
        <div className="flex flex-col ms-auto text-slate-600 text-[15px] space-y-2">
          <label>SOCIAL MEDIA</label>
          <label>Follow us on social media to find out the latest products</label>
        </div>
      </div>
      <div className="flex justify-between pt-5 border-t">
        <label className="text-[15px] text-slate-600">&copy; {new Date().getFullYear()} DailyHype. All rights reserved</label>
        <div className="text-slate-600 text-[15px] flex space-x-4">
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms and Conditions</Link>
          <Link href="">Sitemap</Link>
        </div>
        <label className="text-[15px] text-slate-600">Country & Region: Singapore</label>
      </div>
    </div>
  );
}
