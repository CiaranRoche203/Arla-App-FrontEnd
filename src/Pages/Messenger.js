import './../Styles/Register.css';
import Navbar from './Navbar';
import {ChatEngine} from 'react-chat-engine';
import Auth from './Auth';
function Messenger() {
    const {user} = Auth.getAuth();
    //console.log(user)
    //display
    return (
        <div id="login-page">
            <Navbar />
           <div id="logo-tab" >
               Messenger
           </div>
           <ChatEngine
           height="calc(100vh -66px)"
           projectId="f3b1760a-c847-4c1f-8021-1c48bc5c23a4"
           userName="."
           userSecret="."
           />
        </div>

    );
}

export default Messenger;