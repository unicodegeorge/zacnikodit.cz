import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
function FirstPart(props) {
    
    return (
        <div className={"lesson-video-container"}>
            <ReactPlayer url={"https://www.youtube.com/watch?v=4X0nXQ3YtSs&ab_channel=Jirkavysv%C4%9Btlujev%C4%9Bci"} />
        </div>
    
    )
}

export default FirstPart;