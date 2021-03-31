import {Route} from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import UsersContainer from "./components/UsersContainer";
import DialogsContainer from "./components/DialogsContainer";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <NavBar/>
            <div className="container__content">
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
