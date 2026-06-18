
import type { State } from '../types'

type Props = {
    state: State;
}

export default function ErrorCard({state}: Props){
    return(
        <div style={{
            "border": "solid black 2px",
            "borderRadius": "8px",
            "width": "450px",

            "padding": "16px 16px",

            "background": "#c77474",
            "display": "flex",
            "flexDirection": "column",
            "color": "white"
        }}>
            {
                Object.entries(state.errors).map(([key, value]) => {
                    if (key !== undefined) {
                        return (
                        <div key={key}>
                            {value}
                        </div>
                    )} else {
                        return (
                            null
                        )
                    }
                })
            }
        </div>
    )
}