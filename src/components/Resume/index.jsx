import ConditionResume from "../ConditionResume"

export default function Resume({ resume }) {
    return (
        <div className="w-full flex gap-4 justify-between">
            {resume.map(condition => {
                return (
                    <ConditionResume key={condition.title} condition={condition} />
                )
            })}
        </div>
    )
}