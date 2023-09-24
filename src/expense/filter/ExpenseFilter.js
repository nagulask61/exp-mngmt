import './ExpenseFilter.css'

const ExpenseFilter=({selected,selectedValueChnaged})=>{
const onChanheHandler=(event)=>{
    console.log(event.target.value)
    selectedValueChnaged(event.target.value);
}
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By year: </label>
            <select value={selected} onChange={onChanheHandler}>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2022'>2022</option>
                
            </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;