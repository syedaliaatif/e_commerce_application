import "../../chats.css"
const UserChatComponent=()=>{
    return(
        <>
        <input type="checkbox" id="check"/>
        <label className="chat-btn" htmlFor='check'>
            <i className="bi bi-chat-dots comment"></i>
            <i className="bi bi-x-circle close"></i>
        </label>
        <div className="chat-wrapper">
            <div className="chat-header">
                <h6> Let's Chat - Online</h6>
            </div>
            <div className="chat-form">
                <div className="chat-msg">
                    <p>
                        <b>You wrote: </b>
                        Hello World! My name is xyz, I need your help. 
                    </p>
                    <p className="bg-primary p-3 text-white rounded-pill my-2">
                        <b>Support wrote: </b>
                        Hello Sir how may I help you? 
                    </p>
                    <p>
                        <b>You wrote: </b>
                        Hello World! My name is xyz, I need your help. 
                    </p>
                    <p className="bg-primary p-3 text-white rounded-pill my-2">
                        <b>Support wrote: </b>
                        Hello Sir how may I help you? 
                    </p>
                    <p>
                        <b>You wrote: </b>
                        Hello World! My name is xyz, I need your help. 
                    </p>
                    <p className="bg-primary p-3 text-white rounded-pill my-2">
                        <b>Support wrote: </b>
                        Hello Sir how may I help you? 
                    </p>
                                        
                </div>
                <textarea id = "clientChatMsg" className="form-control" placeholder="Your Text Message"></textarea>
                <button className="btn btn-success btn-block">Submit</button>
            </div>
        </div>
        
        

        </>
    )
}
export default UserChatComponent; 