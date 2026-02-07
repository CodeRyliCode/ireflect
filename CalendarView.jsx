

const CalendarView = () => {
const entries = JSON.parse(
    localStorage.getItem("journalEntries") || "{}"
)

    return (
        <div className={"calendar-container"}>
            <input className={"calendar"} type={"date"} onChange={(e) =>
            {
            const entry = entries[e.target.value];
            console.log('entry', entry)
                alert(entry ? entry.text : "No entry for this date");
            }}
            />
            <div className={"calendar-info-text"}>  Choose a date; let's time travel.
            </div>
        </div>
    )
}