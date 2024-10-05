import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit ammaet lorem trice jnl",
  },
  {
    id: 2,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit ammaet lorem trice jnl",
  },
  {
    id: 3,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit ammaet lorem trice jnl",
  },
];

const Announcement = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <h1>View All </h1>
      </div>
      <div className=" flex flex-col gap-4">
        {events.map((data) => (
          <div
            className=" p-5 rounded-md   border-t-4 odd:bg-purple-100 even:bg-yellow-100 "
            key={data.id}
          >
            <div className=" flex items-center justify-between">
              <h1 className=" font-semibold text-gray-600">{data.title}</h1>
              <span className=" text-xs bg-white p-2 rounded-md text-gray-400">
                {data.time}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
