import { CircularProgress } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

import PlayGroundComponent from "./PlaygroundComponent";

function LessonComponent(props) {
    const [lesson, setLesson] = useState();
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
      toggleLoading(true);
    }, []);

    const lessonDoc = `// Welcome to class - ${lesson?.lessonTitle}`;


    return (
        <div>
           {loading && <CircularProgress sx={{position: "absolute", left: '50%', top: '50%'}} color="success" thickness="10"/>}
            {!loading && <PlayGroundComponent doc={lessonDoc}/>}
        </div>
    )
}

export default LessonComponent;
