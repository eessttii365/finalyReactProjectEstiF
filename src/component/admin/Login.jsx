import axios from "axios"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Login(props) {

    const { x } = props
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleLogin = () => {
        axios.post("http://localhost:8787/login", { "name": userName, "password": password })
            .then(res => {
                if (res.data === "Login success!") {
                    x(true)
                }
            })
            .catch(err => {
                alert('שגיאה בהתחברות')
            })
    }
    return (
        <>
            <div >
                <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={e => setUserName(e.target.value)} />
            </div>
            <br />
            <div >
                <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)} />
            </div>
            <br />
            <div >
                <Button variant="Login" onClick={handleLogin}>LOGIN</Button>
            </div>
        </>
    )
}

export default Login