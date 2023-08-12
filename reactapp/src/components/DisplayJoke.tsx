import { Card, CardContent, Typography } from "@mui/material";
import { IJoke } from "../models/IJoke";

interface IDisplayJokeProps {
    data?: IJoke;
    isError?: boolean
}
const DisplayJoke = (props: IDisplayJokeProps) => {
    return <div>
        <Card variant="outlined">
            <CardContent>
                {!props.isError ? <Typography>
                    {props.data?.desc}
                </Typography> : <Typography variant="body2" sx={{ color: "red" }}>{"Unable to find the joke.Please try again..."}</Typography>}
            </CardContent>
        </Card>
    </div>
}

export default DisplayJoke;