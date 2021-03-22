import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

import {Route} from "react-router-dom";

const App = ({state, addPost, updateNewPostText}) => {
    return (
        <div className="container">
            <Header/>
            <NavBar/>
            <div className="container__content">
                <Route path="/profile" render={() => <Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
