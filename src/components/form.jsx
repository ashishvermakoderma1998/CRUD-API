import { useState } from "react"
import { postData } from "../api/PostApi";

export const FORM = ({data, setData}) => {
    const [addData, setAddData] = useState({
        title:"",
        body:"",
    })

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=>{
            return {
                ...prev,
                [name]:value,

            };
        });
    };

    const addPostData = async() => {
       const res = await postData(addData);
       console.log("res",res);
       if((res.status = 200)) {
        setData([...data,res.data])
       }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }
    return (
        <form className="section-form" onSubmit={handleFormSubmit}>
            <div>
                <h1>CRUD API PRO</h1>
                <label htmlFor="title"></label>
                <input
                type="text"
                autoComplete="off"
                id="title"
                name="title"
                placeholder="Add Title"
                value={addData.title}
                onChange={handleInputChange}
                />

                <label htmlFor="body"></label>
                <input
                type="text"
                autoComplete="off"             
                id="body"
                name="body"
                placeholder="Add Post"
                value={addData.body}
                onChange={handleInputChange}
                />

                <button type="submit">Add</button>
            </div>
            
        </form>
    )
}