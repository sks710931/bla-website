import React, { useState } from 'react'
import { Timer } from './timer'

export const Minter = () => {
    const [timerDone, setTimerDone] = useState(false);
    const onTimerComplete = () => {
        setTimerDone(true);
    }
    return <div className="minter">
        {
            !timerDone && <Timer onComplete={onTimerComplete} />
        }
        {
            timerDone && (
                <>
                    <h2 className='text'>
                        Public Mint is Live
                    </h2>
                    <button onClick={() => window.open("https://mint.boredlionapes.com", "blank")} className='btn button-blue'>Mint Now</button>
                </>
            )
        }
    </div>
}