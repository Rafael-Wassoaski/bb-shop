import React, {useState} from "react";
import {Button, Box, Container, flexbox, TextField, FormControl, FormControlLabel, Switch} from "@material-ui/core";

function LoginForm() {
    const [logged, setLogged] = useState(false);
    return (
        <Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <img
                    style={{
                        width: '50%',
                        height: '50%',
                    }}
                    src='https://scontent.fcfc2-1.fna.fbcdn.net/v/t1.6435-9/93207717_2569470239984217_2013462861430390784_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9WkZlQinnScAX_erXRa&_nc_ht=scontent.fcfc2-1.fna&oh=157ce4476c29850e20630c72559fcc28&oe=6149DEF7'
                />
            </Box>
            <form>
                <TextField id='username' type='text' label='Nome de usuário' variant='outlined' margin='normal'
                           fullWidth/>
                <TextField id='password' type='password' label='Senha' variant='outlined' margin='normal' fullWidth/>
                <FormControlLabel control={
                    <Switch name='stayLogged'
                            checked={logged}
                            color='primary'
                            />
                } label='Permanecer logado'/>
                <Button fullWidth variant='contained' color='primary'>Entrar</Button>
            </form>
        </Container>

    )
}

export default LoginForm