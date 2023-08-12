import { Backdrop, CircularProgress } from "@mui/material"

const LoadingIndicator = ({ show }: { show: boolean }) => {
    return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={show}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
}

export default LoadingIndicator;