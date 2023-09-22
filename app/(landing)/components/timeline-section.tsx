const TimelineSection = () => {
  return (
    <div
      id="timeline"
      className="flex flex-col space-y-16 min-[1300px]:space-y-4 min-[1300px]:my-28 my-20 min-[1300px]:mx-28"
    >
      <div className="flex flex-col items-center space-y-8">
        <h3 className="text-white leading-relaxed text-center text-3xl min-[1300px]:text-4xl font-bold">
          Timeline
        </h3>
        <p className="text-base text-white font-medium leading-loose text-center w-1/3">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
    </div>
  );
};

export default TimelineSection;
