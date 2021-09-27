import './App.css';
import LoginForm from "./components/login/loginForm";
import {Box} from "@material-ui/core";

function App() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="120vh">
            <LoginForm/>
        </Box>
    );
}

export default App;
