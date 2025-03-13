"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminColourForm = () => {
  return (
    <div className="flex flex-col w-full mt-8 px-6">
      <h1 className="text-2xl font-semibold uppercase">Colour Registration</h1>
      <form className="flex flex-wrap w-full px-8 border py-8 gap-y-5 rounded-lg shadow-md mt-4">
        <div className="flex basis-1/2 items-center">
          <label className="min-w-24">Name: </label>
          <Input type="text" name="name" variant="input" className="min-w-80" />
        </div>
        <div className="flex basis-1/2 items-center">
          <label className="min-w-24">Hex Code: </label>
          <Input type="text" name="hex" variant="input" />
        </div>
        <Button className="mt-6 w-[8rem] h-[2.6rem] 2xl:h-[2.8rem]" variant="primary">
          <span>Save</span>
        </Button>
        <Button className="mt-6 w-[8rem] h-[2.6rem] 2xl:h-[2.8rem] ms-4" variant="outline">
          <span>Clear</span>
        </Button>
      </form>
    </div>
  );
};

export default AdminColourForm;
