import { useState } from "react";
import styles from "./Timer.module.css";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onClickStart = () => {
    const intervalId = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setTimerId(intervalId);
  };

  const onClickStop = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const onClickReset = () => {
    setTimer(0);
    onClickStop();
  };

  return (
    <div className={styles.timer}>
      <h1>{timer}</h1>
      <div>
        <button className={styles.btn} onClick={onClickStart}>
          Start
        </button>
        <button className={styles.btn} onClick={onClickStop}>
          Stop
        </button>
        <button className={styles.btn} onClick={onClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
