import Card from "../card";
export default function Tours({ tours, removeTour }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-[300px]">
        <h1 className="font-blacl border-dashed border-4 border-blue-900 w-[250px] h-[80px] flex justify-center items-center rounded-xl mt-3 text-black-600 font-black">
          Plan with Tours
        </h1>

        <div className="flex justify-center  flex-wrap">
          {tours.map((tour) => {
            return <Card {...tour} removeTour={removeTour}></Card>;
          })}
        </div>
      </div>
    </>
  );
}
