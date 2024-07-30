import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";
export default function NewProject({ click, onAdd }) {
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const modal = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value

        if (enteredTitle === "" || enteredDate === "" || enteredDescription === "") {
            modal.current.open();
            return;
        }
        onAdd({ title: enteredTitle, description: enteredDescription, date: enteredDate })
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text -xl font-bold text-stone-500 my-4">Invalid Input</h2>
                <p className="text-stone-500 mb-4">Oops... looks like you forgot to fill some input</p>
                <p className="text-stone-500 mb-4">Please enter valid information in all the input fields.</p>
            </Modal>
            <div className="w-[32rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li className="text-stone-800 hover:text-stone-950"
                        onClick={click}
                    >Cancel</li>
                    <li className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" isTextArea />
                    <Input type="date" ref={date} label="Due Date" />
                </div>
            </div>
        </>
    )
}