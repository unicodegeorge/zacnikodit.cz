import { useParams } from "react-router";
import LessonComponent from "../components/LessonComponent";

function LessonScreen() {

    const {lessonId} = useParams();
    console.log(lessonId);
    return (
        <div className="lesson-container">
            
            <LessonComponent lessonId={lessonId} />
        </div>
    )
}
export default LessonScreen;