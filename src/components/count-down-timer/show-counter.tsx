import DateTimeDisplay from "./date-time-display";

type PropTypes = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ShowCounter = ({ days, hours, minutes, seconds }: PropTypes) => {
  return (
    <div className='flex justify-start items-center gap-6'>
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

export default ShowCounter;
