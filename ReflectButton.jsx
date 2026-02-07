const ReflectButton = () => {
const [openTextArea, setOpenTextArea] = React.useState(false)
const [entry, setEntry] = React.useState("")
    const onClickReflectButton = () => {
    setOpenTextArea(true)
    }

    const onClickSaveButton = () => {
        setOpenTextArea(false)
    }

    return (
        <div className={"reflect-button-container"}>
            {openTextArea ?
                <><textarea className={"text-area"} value={entry} placeholder={"type here"} onChange={(e) => setEntry(e.target.value)}/>
                    <div className={"save-button-container"}>
                <button title={"save-that-thought"} className={"action-button"} onClick={onClickSaveButton}>Save that thought! :)</button>
                </div></>
                :
            <button title={"reflect-it"} onClick={onClickReflectButton} className={"action-button"}>
            Reflect it...
        </button>}


        </div>
    )
}