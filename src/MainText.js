import { Typography } from '@mui/material'; 

function MainText(props) {
    return (
        <>
            <Typography>There are {props.minesNum} hidden mines.</Typography>
            <Typography>{props.mainText}</Typography>
        </>);
}

export default MainText;