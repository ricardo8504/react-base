import ShowHide from "./ShowHide"
import TodoList from "./TodoList";
import Tabs from "../../common/Tabs";

const Session1 = () => { 
    const tabs = [
        { label: 'Show/Hide', content: <ShowHide /> },
        { label: 'Todo List', content: <TodoList /> },
    ];
    return (
        <>
            <h1 className="text-3xl font-bold underline">Session 1 - Challenges</h1>
            <Tabs tabs={tabs} />
        </>
    )
}
export default Session1;
