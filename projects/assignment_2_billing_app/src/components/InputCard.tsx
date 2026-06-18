import { useRef } from 'react'

import './InputCard.css'

import type { State, Action } from '../types'

type Props = {
  tipOptions: string[];
  state: State;
  dispatch: React.Dispatch<Action>;
};

export default function InputCard({tipOptions, state, dispatch}: Props){
    const customInputRef = useRef<HTMLInputElement | null>(null)

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
            <div style={{ "color": "white", "fontSize": "20px"}}> Tip calculator </div>
            <div style={{"margin": "16px 0px 4px", "color": "white"}}>Bill Amount</div>
            <input 
                style={{"width": "100%", "fontSize": "20px", "boxSizing": "border-box"}} 
                type="string"
                step="0.01"
                value={state.billAmount}
                onChange={(e)=> {
                    dispatch({
                        type:'SET_BILL',
                        value: e.target.value,
                    })
                }}
            /> 


            <div style={{"display": "flex", "margin": "8px 0px", "justifyContent": "space-between"}}>
                {tipOptions.map( (tip: string) => {
                    const onClick = tip !== 'Custom'
                        ? () => dispatch({
                            type: "SET_TIP",
                            value: tip
                        })
                        : () => customInputRef.current?.focus();
                    
                    const value = tip !== 'Custom' 
                        ? `${tip}%`
                        : tip;
                    
                    return (
                        <TipButton 
                            key={tip} 
                            value={value}
                            selected={tip===state.tip} 
                            onClick={onClick} 
                        />
                    )
                })}

                <input 
                    ref={customInputRef}
                    className="customTipInput"
                    value={state.tip}
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_TIP',
                            value: e.target.value,
                        });
                    }}
                />

            </div>

            <div style={{"margin": "16px 0px 4px", "color": "white"}}>Number of people</div>
            
            <div style={{ display:"flex", gap:"12px"}}> 
                <button 
                    className="inputButton" 
                    style={{background:"#989898"}}
                    onClick={() => dispatch({
                        type: 'DECREMENT_NUM_PEOPLE'
                    })}
                >
                    -
                </button>
                <div style={{fontSize:"16px", textAlign:"center", color:"white", padding:"4px 12px", boxSizing:"border-box", height:"100%"}}>
                    {state.numPeople}
                </div>
                <button 
                    className="inputButton" 
                    style={{background:"#989898"}}
                    onClick={() => dispatch({
                        type: 'INCREMENT_NUM_PEOPLE'
                    })}
                >
                    +
                </button>
            
                <div style={{fontSize: "12px", padding: "4px 0px", "color": "white", paddingTop:"8px", height:"100%", boxSizing:"border-box"}}>Number of people</div>

            </div>
        </div>
    )
}


type TipButtonProps = {
    value: string
    selected: boolean | null
    onClick: () => void
}

function TipButton({value, selected, onClick}: TipButtonProps){
    const background = selected ? "#5d9ad3" : "#989898" 
    return (
        <button className="inputButton" style={{background}} onClick={onClick}>
            {value}
        </button>
    )
}