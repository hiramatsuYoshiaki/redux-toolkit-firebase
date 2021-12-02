import React from 'react'
import {
    Button,
    Dialog, 
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'

const Confirm = ({openConfirm, isOpenConfirm, resultConfirm, setResultConfirm, title, message} ) => {
    const handleClose = () => {
        isOpenConfirm(false)
    }
    const handleDisagree = () => {
        isOpenConfirm(false)
        setResultConfirm(false)
    }
    const handleAgree = () => {
        isOpenConfirm(false)
        setResultConfirm(true)
    }

    return (
        <>
        <Dialog 
            open={openConfirm}
            onClose={ handleClose}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                    <DialogContentText >
                        {message}
                    </DialogContentText>
                </DialogContent>
            <DialogActions>
                <Button onClick={handleDisagree}>キャンセル</Button>
                <Button onClick={handleAgree} autoFocus>
                    はい
                </Button>
            </DialogActions>

        </Dialog>
        </>
    )
}

export default Confirm
