import ConditionResume from "../ConditionResume"

export default function Resume({ color, resume }) {
    return (
        <div className="w-full flex gap-4 justify-between">
            {resume.map(condition => {
                return (
                    <ConditionResume key={condition.title} color={color} condition={condition} />
                )
            })}
        </div>
    )
}