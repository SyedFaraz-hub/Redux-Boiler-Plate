
const upload_data = (newUser)=>{

    return (dispatch)=> {
        
        dispatch({type: "SETDATA", payload: newUser })
    }
              
}

export {
    upload_data
}