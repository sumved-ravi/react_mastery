export default function ProgressBar({current, total}){
    const pct = 100 * current / total;

    return (
        <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", 
                fontSize:"13px", color:"#666", marginBottom:"6px"
            }}>
                <span> Question {current} of {total} </span>
                <span>{pct}% complete </span>
            </div>

            <div style={{ height:"6px", background:"#e5e7eb", borderRadius:"3px", width:"100%" }}>
                <div style={{ height:"100%", borderRadius:"3px", background: "#2563eb",
                    width:`${pct}%`, transition:"width 0.3s ease"
                }} />
            </div>
        </div>
    )
}