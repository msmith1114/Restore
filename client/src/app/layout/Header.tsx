import { AppBar, Switch, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({handleThemeChange, darkMode} : Props) {
    return (
        <AppBar sx={{mb: 4}} position='static'>
            <Switch
              checked={darkMode}
              onChange={handleThemeChange}
              aria-label="login switch"
            />
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
            </Toolbar>
        </AppBar>
    )
}