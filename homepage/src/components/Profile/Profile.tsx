import { 
    Box, Container, Typography,
    Stack, List, ListItem, ListItemText
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const Profile = () => {
    return (
        <Container>
            <Stack spacing={1}>
                <Box sx={{textAlign: "start", marginTop: 3, marginBottom: 2}}>
                    <Stack>
                        <Typography variant="h4">
                            Tanaka Daiki
                        </Typography>

                        <Typography variant="h5">
                            daiki.yosky@gmail.com
                        </Typography>
                    </Stack>
                </Box>

                <Box sx={{textAlign: "start"}}>
                    <Typography variant='h6'>Career</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="April, 2020 ~ Present" secondary="MoneyForward Inc. as a software engineer"/>
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{textAlign: "start"}}>
                    <Typography variant='h6'>Interests and skills</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Languages" secondary="Japanese, English" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Programming languages" secondary="Python, Go" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Others" secondary="CircleCI, Github Actions, AWS, Terraform, Docker" />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{textAlign: "start"}}>
                    <Typography variant='h6'>Educational background</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="April, 2018 ~ March, 2020" secondary="Kyoto University, Graduate School of Informatics" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="April, 2014 ~ March, 2018" secondary="Kyoto University, Undergraduate School of Informatics and Mathmatical Science" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary=" April, 2011 ~ March, 2014" secondary=" High school attached to Hiroshima University" />
                        </ListItem>
                    </List>
                </Box>

                <Box sx={{textAlign: "start"}}>
                    <Typography variant='h6'>Certification</Typography>
                    <List>
                        <ListItem>TOEIC: 895 (Dec, 2021)</ListItem>
                        <ListItem>The Official Business Skill Test in Book-keeping (日商簿記検定試験): 3rd grade (Nov, 2022)</ListItem>
                        <ListItem>Kaggle Expert</ListItem>
                    </List>
                </Box>

                <Box sx={{textAlign: "start"}}>
                    <Typography variant='h6'>Links</Typography>
                    <List>
                        <ListItem component="a" href="https://github.com/DaikiTanak">
                            <GitHubIcon />GitHub
                        </ListItem>
                        <ListItem component="a" href="https://www.slideshare.net/DaikiTanaka7">
                            <SlideshowIcon /> SlideShare
                        </ListItem>
                        <ListItem component="a" href="https://www.kaggle.com/tanakin">Kaggle</ListItem>
                    </List>
                </Box>

            </Stack>

        </Container>
    );
};

export default Profile