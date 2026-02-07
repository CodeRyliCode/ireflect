const JournalView = () => {
const [openTextArea, setOpenTextArea] = React.useState(false)
const [entry, setEntry] = React.useState("")
    const onClickReflectButton = () => {
    setOpenTextArea(true)
    }

    const onClickSaveButton = (entryText) => {
        setOpenTextArea(false)
        const today = new Date().toISOString().split("T")[0]
        const existing = JSON.parse(
            localStorage.getItem("journalEntries") || "{}"
        );

        existing[today] = {
            text: entryText,
            createdAt: new Date().toISOString()
        }
        console.log('existing', existing)
        localStorage.setItem("journalEntries", JSON.stringify(existing))
    }

    return (
        <div className={"reflect-button-container"}>
            {openTextArea ?
                <><textarea className={"text-area"} value={entry} placeholder={"type here"} onChange={(e) => setEntry(e.target.value)}/>
                    <div className={"save-button-container"}>
                <button title={"save-that-thought"} className={"action-button"} onClick={() => onClickSaveButton(entry)}>Save that thought! :)</button>

                    </div>
                    <button title={"close"} className={"close-button"} onClick={onClickSaveButton}>
                        Close
                    </button></>
                :
            <button title={"reflect-it"} onClick={onClickReflectButton} className={"action-button"}>
            Reflect it...
        </button>}


        </div>
    )
}