'use client'

import TimeAgo from "react-timeago";

type Props = {
  time: string;
}

function LiveTimestamp({time}: Props) {
  return (
    <div>
      <TimeAgo date={time} />
    </div>
  )
}

export default LiveTimestamp;