import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { PlaneFilterSchema } from "@/lib/validation";

async function FilterPlanes(formData: FormData) {
  "use server";
  const values = Object.fromEntries(formData.entries())
  const {engineType,planeModal,capacity} = PlaneFilterSchema.parse(values)
  const searchParams = new URLSearchParams({
    ...(engineType && {engineType}),
    ...(planeModal && {planeModal}),
    ...(capacity && {capacity})
  });

  redirect(`/airplanes?${searchParams.toString()}`)

}

export default async function FilterSheet() {
  const distinctEngineType = (await prisma.plane
    .findMany({
      select: {
        engineType: true,
      },
      distinct: ["engineType"],
    })
    .then((engineTypes) =>
      engineTypes.map(({ engineType }) => engineType).filter(Boolean)
    )) as string[];

  const distinctPlaneModel = (await prisma.plane
    .findMany({
      select: {
        planeModal: true,
      },
      distinct: ["planeModal"],
    })
    .then((planeModals) =>
      planeModals.map(({ planeModal }) => planeModal).filter(Boolean)
    )) as string[];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filters</Button>
      </SheetTrigger>
      <SheetContent>
        <form action={FilterPlanes}>
          <SheetHeader>
            <SheetTitle>Filter Results</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="engineType">Engine</Label>
              <Select name="engineType">
                <SelectTrigger id="engineType" className="col-span-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>

                <SelectContent>
                  {distinctEngineType.map((engineType) => (
                    <SelectItem value={engineType} key={engineType}>
                      {engineType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="planeModal">Model</Label>
              <Select name="planeModal">
                <SelectTrigger id="planeModal" className="col-span-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>

                <SelectContent>
                  {distinctPlaneModel.map((planeModal) => (
                    <SelectItem value={planeModal} key={planeModal}>
                      {planeModal}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="capacity">Capacity</Label>
              <Input id="capacity" name="capacity" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Filter</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
