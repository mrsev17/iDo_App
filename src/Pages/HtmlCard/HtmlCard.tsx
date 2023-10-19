import { useSelector } from "react-redux"
import { stateToogle } from "../../interfaces"

export const HtmlCard = () => {
    const mode = useSelector((state:stateToogle) => state.mode.toggle)
    return (
        <div className="content-page flip-container">
            <div className="flipper">
                <div className={mode ? "front-dark" : "front"}>
                    <h2 className="content-title">This page for PERFORMERS</h2>
                </div>
                <div className={mode ? "back-dark" : "back"}></div>
            </div>
        </div>
    )
}