import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

interface AirPlaneCardProps {
  planeName: string;
  planeModal: string;
  engineType: string;
  planeImage: string | null;
  capacity: string;
}

export default function AirPlaneCard({
  planeName,
  planeModal,
  planeImage,
  engineType,
  capacity,
}: AirPlaneCardProps) {
  const defaultImage = "/images/newheroplane.jpg";
  return (
    <Card className="w-fit">
      <CardContent>
        <div className="relative h-[230px] bg-background rounded-2xl mt-2">
          <Image
            src={planeImage ?? defaultImage}
            alt="heroImage"
            fill
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </CardContent>

      <CardFooter>
        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
            {planeName}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
              {planeModal}
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
              {engineType}
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
              {capacity}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
