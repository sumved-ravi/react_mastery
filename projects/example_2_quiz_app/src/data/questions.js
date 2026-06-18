export const questions = [
{
    id: 1,
    question: "What hook do you use for local component state?",
    options: ["useEffect","useState","useRef","useContext"],
    answer: "useState",
},
{
    id: 2,
    question: "Which is the correct way to update state based on previous state?",
    options: [
        "setState(state + 1)",
        "setState(prev => prev + 1)",
        "state = state + 1",
        "setState(state++)",
    ],
    answer: "setState(prev => prev + 1)",
},
{
    id: 3,
    question: "In React, data flows ___.",
    options: ["both ways","upward","downward","randomly"],
    answer: "downward",
},
{
    id: 4,
    question: "What does JSX compile to?",
    options: [
        "HTML strings",
        "React.createElement() calls",
        "Virtual DOM nodes directly",
        "JSON objects",
    ],
    answer: "React.createElement() calls",
},
]