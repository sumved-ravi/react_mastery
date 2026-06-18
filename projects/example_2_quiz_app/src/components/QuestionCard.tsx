export default function QuestionCard({ question, selected, onSelect}) {
    return (
        <div>
            <h2>
                {question.question}
            </h2>

            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {question.options.map(option => {
                    let bg = "#f9fafb"
                    let border = "1px solid #e5e7eb"
                    let color = "#1a1a1a"

                    if (selected === option) {
                        const correct = option === question.answer 
                        bg      = correct ? "#f0fdf4" : "#fef2f2"
                        border  = correct ? "2px solid #16a34a" : "2px solid #dc2626"
                        color   = correct ? "#166534" : "#991b1b"
                    }

                    return (
                        <button
                            key={option}
                            onClick={() => onSelect(option)}
                            disabled={selected !==null}
                            style={{
                                padding:"14px 18px", textAlign:"left", background:bg,
                                border, borderRadius:"8px", cursor: selected ? "default": "pointer",
                                fontSize:"15px", color, fontWeight: selected===option ? 600 : 400,
                                transition: "all 0.15s"
                            }}
                        >
                            {option}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}