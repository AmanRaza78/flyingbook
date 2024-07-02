import LoadingCardComponent from "@/components/loading-card-component";

export default function LoadingFile(){
    return(
    <div className="flex flex-col">
      <div className="mt-4 mx-10">
        <LoadingCardComponent/>
      </div>
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mx-10">
      <LoadingCardComponent/>
      <LoadingCardComponent/>
      <LoadingCardComponent/>
      <LoadingCardComponent/>
      </div>
    </div>
    )
}