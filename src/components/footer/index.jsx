import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

 export const Footer = () => {
    return ( 
    <footer>
        <Box bgcolor="textSecondary" color="white">
            <Container maxWidth="lg">
            <Grid item xs={12} sm={4}>
                    <Box textAlign="center" borderBottom={0}>This site was done as a Homework for nfactorial lesson</Box> 
                </Grid>
                <Grid sx={{justifyContent:'space-between'}} container spacing={2}> 
                        <Box>
                            <Link href="https://t.me/noQLx" target="_blank" color="inherit"> ContactMe 
                            </Link>
                        </Box>

                        <Box>
                            <Link href="https://www.nfactorial.school/" target="_blank" color="inherit"> nfactorial
                            </Link>
                        </Box>
                </Grid>
                <Box textAlign="center"> nfactorial-school &reg; {new Date().getFullYear()}</Box>
            </Container>
        </Box>
    </footer>
    ) 
}