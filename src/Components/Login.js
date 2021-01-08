import React, { useState } from "react";
import "./Login.css";
import { loginUrl } from "../spotify";
import {
	TextField,
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	Grid,
	Link,
	Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
	return (
		<Container maxWidth="xs" component="main">
			<div className="login">
				<div className={classes.paper}>
                    <p>Soundify</p>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form noValidate className={classes.form}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
                            name="email"
                            onChange={(e) => setEmail(e.currentTarget.value)}
							autoComplete="email"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
                            id="password"
                            onChange={(e) => setPassword(e.currentTarget.value)}
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={console.log(`${email} and ${password}`)}>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
			</div>
		</Container>
	);
}

export default Login;
