import {AppBar, Container, Hidden, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

/**
 * @http: https://fr.indeed.com/
 * @http: https://www.welcometothejungle.com/fr/media
 * @constructor
 */

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const brandName = "Mon portfolio";

    /**
     * lg : large = 1280px
     * md : medium = 960px
     * sm : small = 600px
     * xs : extra small = 0px
     */

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        <Typography variant={"h5"}>{brandName}</Typography>
                        <Hidden smDown>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "2vh"
                                }}
                            >
                                <Typography variant={"h6"}>Accueil</Typography>
                                <Typography variant={"h6"}>A propos</Typography>
                                <Typography variant={"h6"}>Contact</Typography>
                            </div>
                        </Hidden>
                        <Hidden smUp>
                            <div>
                                {
                                    open ? <CloseIcon onClick={() => setOpen(!open)}/>
                                        : <MenuIcon onClick={() => setOpen(!open)}/>
                                }
                            </div>
                        </Hidden>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;

