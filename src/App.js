import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <NavBar/>
            <div className="container__content">
                {/*<Dialogs/>*/}
                <Profile/>
            </div>
        </div>
    );
}

export default App;
