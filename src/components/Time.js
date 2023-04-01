import React, {useState, useEffect} from 'react'

function Time() {

    const [time, setTime] = useState(0);
    const [time2, setTime2] = useState(0);
    const [time3, setTime3] = useState(0);
    const [startTimer, setStartTimer] = useState(true);
    const [timerId, setTimerId] = useState(0);

    const pause = () => {
        setStartTimer(prevS => !prevS)
        console.log(startTimer)
    }

    let x = 0;
    let y = 0;

    useEffect(() => {
        let intervalId = null;
        if(startTimer) {
            intervalId = setInterval(() => {
                x += 0.5;
                if(x === 60) {
                    y++;
                    setTime2(y)
                    x = 0
                }
                return setTime(x)
            }, 1000);
        }
    }, [startTimer])

    const secondes = time < 10 ? `0${time}` : `${time}`
    const minutes = time2 < 10 ? `0${time2}` : `${time2}`

  return (
    <div>
        <h1>{`0${time3} : ${minutes} : ${secondes}`}</h1>
    </div>
  )
}

export default Time