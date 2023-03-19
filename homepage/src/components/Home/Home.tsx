import { 
    Box, Container, Typography,
} from '@mui/material';

const Home = () => {
    return (
        <Container component="main">
            <Box
                alignContent={"center"} 
                sx={{
                        textAlign: "center",
                        my: 30
                    }}
            >
                <Typography variant="h2">
                    Welcome to Daiki Tanaka's page
                </Typography>
            </Box>
        </Container>
    );
};

export default Home