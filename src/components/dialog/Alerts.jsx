import React from 'react'
import {
        Dialog, 
        DialogContent,
        DialogContentText,
        DialogTitle,
    } from '@mui/material'

const Alerts = ({open, isOpen, title, message}) => {
    // const [open, isOpen] = useState(false)
    // const handleClickOpen = () => {
    //     isOpen(true)
    // }
    const handleClose = () => {
        isOpen(false)
    }
    return (
        <>
            {/* <Button onClick={handleClickOpen}>
               {title}
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        {message}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Alerts
