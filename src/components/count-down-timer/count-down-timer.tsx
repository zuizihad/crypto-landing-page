'use client'

import {useCountdown} from "@/hooks/useCountdown";
import ExpiredNotice from "./expire-timer";
import ShowCounter from "./show-counter";

const CountdownTimer = ({targetDate}: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    
    if (days + hours + minutes + seconds <= 0) {
      return <ExpiredNotice />;
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  };
  
  export default CountdownTimer;