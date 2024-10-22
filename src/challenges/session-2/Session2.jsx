import TodoListWithCategories from "./TodoListWithCategories";
import Tabs from "../../common/Tabs";
import TodoListWithCategoriesFunctional from "./TodoListWithCategoriesFunctional";

const Session2 = () => { 
    const tabs = [
        { label: 'Todo List with Categories', content: <TodoListWithCategories /> },
        { label: 'Todo List with Categories - Functional', content: <TodoListWithCategoriesFunctional /> },
    ];
    return (
        <>
            <h1 className="text-3xl font-bold underline">Session 2 - Challenge</h1>
            <Tabs tabs={tabs} />
        </>
    )
}
export default Session2;
