

export default [
    {
        "id": 1,
        "qns": "What does JSX stand for in React?",
        "option": [
            "JavaScript XML",
            "Java Script eXtender",
            "Java Simple X",
            "Joint Script eXtension"
        ]
    },
    {
        "id": 2,
        "qns": "Which hook is used to add state to a functional component?",
        "option": [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ]
    },
    {
        "id": 3,
        "qns": "How do you pass data from a parent component to a child component?",
        "option": [
            "Via props",
            "Via localStorage",
            "Via context only",
            "Via direct DOM manipulation"
        ]
    },
    {
        "id": 4,
        "qns": "Which method runs after a component is mounted in class components?",
        "option": [
            "componentDidMount",
            "componentWillMount",
            "render",
            "componentWillUpdate"
        ]
    },
    {
        "id": 5,
        "qns": "What is the purpose of keys when rendering lists in React?",
        "option": [
            "To help React identify items and optimize updates",
            "To sort the list automatically",
            "To provide default values",
            "To enable two-way binding"
        ]
    },
    {
        "id": 6,
        "qns": "Which hook is recommended for side effects like data fetching?",
        "option": [
            "useEffect",
            "useMemo",
            "useRef",
            "useCallback"
        ]
    },
    {
        "id": 7,
        "qns": "How do you create a ref to access a DOM element in a functional component?",
        "option": [
            "useRef()",
            "createRef()",
            "document.getElementById()",
            "useState()"
        ]
    },
    {
        "id": 8,
        "qns": "What is a controlled component in React forms?",
        "option": [
            "An input whose value is driven by React state",
            "An input that cannot be changed",
            "An input automatically validated by browser",
            "An input managed by localStorage"
        ]
    },
    {
        "id": 9,
        "qns": "Which feature lets you avoid prop drilling by providing global-like state?",
        "option": [
            "Context API",
            "useState hook",
            "React Router",
            "Portals"
        ]
    },
    {
        "id": 10,
        "qns": "What does React.memo do?",
        "option": [
            "Prevents re-render when props are unchanged",
            "Memoizes expensive calculations in effects",
            "Creates a mutable reference",
            "Schedules updates asynchronously"
        ]
    },
    {
        "id": 11,
        "qns": "Which feature allows rendering children into a DOM node outside the parent component hierarchy?",
        "option": [
            "Portals (ReactDOM.createPortal)",
            "Fragments",
            "Suspense",
            "Error Boundaries"
        ]
    },
    {
        "id": 12,
        "qns": "What is the primary use of useCallback hook?",
        "option": [
            "Memoize a function to avoid unnecessary re-creations",
            "Create a mutable ref object",
            "Delay rendering until data loads",
            "Replace useEffect for side effects"
        ]
    },
    {
        "id": 13,
        "qns": "Which component type can implement lifecycle methods like componentDidCatch?",
        "option": [
            "Class components (for error boundaries)",
            "Functional components only",
            "Stateless components",
            "Fragments"
        ]
    },
    {
        "id": 14,
        "qns": "What is the role of the virtual DOM in React?",
        "option": [
            "Efficiently compute UI changes before updating the real DOM",
            "Store application state persistently",
            "Handle network requests",
            "Provide CSS styling rules"
        ]
    },
    {
        "id": 15,
        "qns": "When should you include dependencies in the useEffect dependency array?",
        "option": [
            "Whenever the effect uses values that should trigger a rerun when they change",
            "Only when using setState",
            "Never — leave it empty for safety",
            "Only for refs"
        ]
    },
    {
        "id": 16,
        "qns": "What does Suspense in React primarily help with?",
        "option": [
            "Handling async loading of components or data (code-splitting)",
            "Catching errors during render",
            "Managing global state",
            "Styling components"
        ]
    },
    {
        "id": 17,
        "qns": "Which attribute is used in JSX to apply CSS classes?",
        "option": [
            "className",
            "class",
            "cssClass",
            "styleName"
        ]
    },
    {
        "id": 18,
        "qns": "Which hook would you use to compute a derived value efficiently?",
        "option": [
            "useMemo",
            "useEffect",
            "useRef",
            "useLayoutEffect"
        ]
    },
    {
        "id": 19,
        "qns": "How do you lift state up in React?",
        "option": [
            "Move the shared state to the closest common ancestor and pass via props",
            "Store the state in each child separately",
            "Use document.cookie to share state",
            "Use refs across components"
        ]
    },
    {
        "id": 20,
        "qns": "Which package is commonly used for routing in React single-page applications?",
        "option": [
            "react-router (react-router-dom)",
            "next/router",
            "redux-router",
            "history-router"
        ]
    }
]
