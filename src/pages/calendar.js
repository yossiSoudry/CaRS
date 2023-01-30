import React, {useCallback} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Calendar() {
  const handle = useFullScreenHandle();

  return (
    <div>
      calendar
    </div>
  );
}

export default Calendar