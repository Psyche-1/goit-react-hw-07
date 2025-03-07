import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
// import { useEffect } from "react";

export default function SearchBox() {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
        // console.log(event.target.value);
        
    };
    
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" onChange={handleChange}  />
        </>
    )
}