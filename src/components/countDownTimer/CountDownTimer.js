import React, { useEffect, useRef, useState } from 'react';

function CountDownTimer({seconds} ) {
    const [countDown, setCountDown] = useState(seconds);
    const formatTime = (time) => {
        let minutes = Math.floor(time / 60)
        let seconds = Math.floor(time - minutes * 60)

        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        return minutes + ':' + seconds;
    }
    const timeId = useRef();

    const timeColor = countDown > 30 ? '#4caf50' : countDown > 10 ? '#ffa500' : '#ff0000'

    useEffect(() => {
        timeId.current = setInterval(() => {
            setCountDown( Prev => Prev - 1)
        }, 1000)
        return () => clearInterval(timeId.current)
    }, [])

    useEffect(() => {
        if(countDown <= 0) {
            clearInterval(timeId.current);
            alert("End")
        }
    }, [countDown])
    return (
        <div className="CountDownTimer" style={StyleSheet.container}>
            <div style={{...styles.timer, color: timeColor}}>
                {formatTime(countDown)}
            </div>
            <div style={styles.label}>Time Remaining</div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '10px 0',
    },
    timer: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    label: {
        fontSize: '0.9rem',
        color: '#666',
    },
};

export default CountDownTimer;