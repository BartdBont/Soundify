import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import PlaylistService from '../Services/PlaylistService';

function AddPlaylistDialog({ open, setOpen }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleClose = () => {
        setOpen(false);
    }

    const handleCreate = () => {
        let playlist = { name: name, description: description };
        PlaylistService.createPlaylist(playlist)
        .then((response) => {
            console.log(response);
        });
        document.location.reload();
        setOpen(false);
    }
    return (
        <Dialog
        open={open}
        onClose={handleClose}
        className="dialog"
        >
            <DialogTitle>Create Playlist</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                label="Name"
                onChange={e => setName(e.target.value)}
                fullWidth
                />
                <TextField
                margin="dense"
                label="Description"
                placeholder="Give your playlist a catchy description"
                onChange={e => setDescription(e.target.value)}
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleCreate} className="createButton">
                    Create
                </Button>
            </DialogActions>


        </Dialog>
    )
}

export default AddPlaylistDialog
