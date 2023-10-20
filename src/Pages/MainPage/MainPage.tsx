import { useSelector } from "react-redux"
import { stateToogle } from "../../interfaces"
import NewTodo from "../../components/NewTodo/NewTodo";

export const MainPage = () => {
    const mode = useSelector((state:stateToogle) => state.mode.toggle);
    return (
        <div className="content-page flip-container">
            <div className="flipper">
                <div className={mode ? "front-dark" : "front"}>
                    <h2 className="content-title">Create new task</h2>
                    <NewTodo />
                </div>
                <div className={mode ? "back-dark" : "back"}>
                </div>
            </div>
        </div>
    )
} 