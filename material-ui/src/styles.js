import {   makeStyles } from "@mui/material/styles";

const useStyles =  makeStyles((theme)=>({
    container :{
        backgroundColor :theme.palatte.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: theme.spacing(2),
      },
      button:{
        marginTop : "40px"
      },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: "60px",
        padding: theme.spacing(6),
      },
}))

export default useStyles;