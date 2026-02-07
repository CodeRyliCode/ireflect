
const App = () => {
    const [view, setView] = React.useState("JournalView")

    const onClickCalendar = () => {
        setView("CalendarView")
    }

    const onClickHome = () => {
        setView("JournalView")
    }

    return (
        <div className={"app"}>
        <NavBar onClickCalendar={onClickCalendar} onClickHome={onClickHome}/>
            {view === "JournalView" ? (
<JournalView/>) : (<CalendarView/>)}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));

