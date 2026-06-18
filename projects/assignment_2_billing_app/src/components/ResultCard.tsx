
export default function ResultCard({state, dispatch}){

    const totalTip = (state.billAmount * Number(state.tip)/100)
    const tipPerPerson = totalTip/state.numPeople
    const totalPerPerson = Number(state.billAmount)+ tipPerPerson
    const total = Number(state.billAmount) + totalTip 

    return(
        <div style={{
            "border": "solid black 2px",
            "borderRadius": "8px",
            "width": "450px",

            "padding": "16px 16px",

            "background": "#5f5f5f",
            "display": "flex",
            "flexDirection": "column"
        }}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"8px", paddingBottom:"12px", borderBottom:"1px solid grey"}}>
                <div> 
                    <div style={{"color": "white"}}>Number of people</div>
                    <div style={{fontSize:"12px", color: "white"}}>{`${state.tip}%`} of {`\$${state.billAmount}`}</div>
                </div>
                <div style={{fontSize:"24px", color:"white"}}>
                    ${tipPerPerson}
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"8px", paddingBottom:"12px", borderBottom:"1px solid grey"}}>
                <div> 
                    <div style={{"color": "white"}}>Total per person</div>
                    <div style={{fontSize:"12px", color: "white"}}>(Bill + tip)/{state.numPeople}</div>
                </div>
                <div style={{fontSize:"36px", color:"blue"}}>
                    ${totalPerPerson}
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"8px", paddingBottom:"12px", borderBottom:"1px solid grey"}}>
                <div> 
                    <div style={{"color": "white"}}>Total tip</div>
                </div>
                <div style={{fontSize:"24px", color:"white"}}>
                    ${totalTip}
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"8px", paddingBottom:"12px", borderBottom:"1px solid grey"}}>
                <div> 
                    <div style={{"color": "white"}}>Grand total</div>
                </div>
                <div style={{fontSize:"24px", color:"white"}}>
                    ${total}
                </div>
            </div>
            
            <button
                className="inputButton" 
                style={{background:"#989898", color:"white"}}
                onClick={() => dispatch({
                    type: 'RESET'
                })}
            >
                Reset
            </button>

        </div>
    )
}