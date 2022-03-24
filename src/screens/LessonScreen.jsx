import { useParams } from "react-router";
import FirstPart from "../components/lesson/FirstPart";
import LessonComponent from "../components/LessonComponent";

function LessonScreen() {

    const {lessonId} = useParams();
    console.log(lessonId);
    return (
        <div className="lesson-container">
            <LessonComponent />
        </div>
    )
}
export default LessonScreen;