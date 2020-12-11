const set_data = (data) => {

    return (dispatch) => {
        // dispatch is like a function yh reducer ki file mai function(expoet default wala(action argument mai data mily ga)) run hoga jsa e dispatch call hoga

        dispatch({ type: "SETDATA", userss: data })
        // type is must
        // dispatch ({type:"momo",data:data})
        // dispatch can be more than one 

        // console.log(data)
        // console.log("this is action/function...")
    }
}
export { set_data}





