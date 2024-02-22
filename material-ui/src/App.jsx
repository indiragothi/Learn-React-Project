import { PhotoCamera } from "@mui/icons-material";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
 
import './styles.js'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
const App = () =>{
    
    return (
        < >
           <CssBaseline></CssBaseline>
           <AppBar position="relative">
               <Toolbar>
                   <PhotoCamera className="icon"/> 
                   <Typography variant="h6">
                       Photo Album
                   </Typography>
               </Toolbar>
           </AppBar>
           <main>
               <div className="container">
                   <Container maxWidth="sm">
                       <Typography variant="h2" align="center" color="textPrimary" gutterBottom> 
                          Photo Album
                       </Typography>
                       <Typography variant="h5" align="center" color="textSecondary" paragraph>
                          hello everyone This is a photo album and i am trying to make this sentense as long as possible so we can see how does it look like on the screen
                       </Typography>
                       <div className="button">
                           <Grid container spacing={2} justify="center">
                               <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                           </Grid>
                       </div>
                   </Container>
               </div>
           
           <Container className="cardGrid" maxWidth="md">
                <Grid container spacing={4}>
                {cards.map((card)=>( 
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className="card">
                            <CardMedia
                               className="cardMedia"
                               image="https://source.unsplash.com/random"
                               title="Image title"
                            />
                            <CardContent className="cardContent">
                                <Typography variant="h5" gutterBottom>
                                   Heading
                                </Typography>
                                <Typography>
                                This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="sm" color="primary">View</Button>
                                <Button size="sm" color="primary">Edit</Button>
                            </CardActions>
                             
                        </Card>
                    </Grid>
                     ))}
                </Grid>
           </Container>
           </main>
           <footer className="footer">
                <Typography variant="h6" align="center" gutterBottom>
                   Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                   Something here to give the footer a purpose!
                </Typography>
           </footer>
        </>
    )
}

export default App;