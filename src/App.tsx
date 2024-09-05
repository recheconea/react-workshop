
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Router } from './router/router'
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

const queryClient = new QueryClient()


const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            React Workshop
          </Typography>
          <Button color="inherit">
            Home
          </Button>
          <Button color="inherit">
            Sample Profile
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '2rem' }}>
      <Router />
      </Container>
    </QueryClientProvider>
  )
}

export default App
