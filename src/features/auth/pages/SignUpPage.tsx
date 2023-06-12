import { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Alert,
  Grid,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { UserRegister } from '../../../models/user';
import SignUpForm from '../SignUpForm';
import { registerUser } from '../authAction';

export default function SignUp() {
  const { error, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect to main page if user is authenticated
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleSubmit = (values: UserRegister) => {
    dispatch(registerUser(values));
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box width="100%" pt={1} pb={1}>
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
        <SignUpForm onSubmit={handleSubmit} error={error} />
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={RouterLink} to="/sign-in" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
