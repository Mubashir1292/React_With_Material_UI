import { Stack,Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fingerprint, FormatBold } from "@mui/icons-material";
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from "react";

export const MuiButton = () => {
    // using the stack instead of the div
    const [formats,setFormats]=useState<string[]>([]);
    console.log(formats)
    const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string[])=>{
               setFormats(updatedFormats);
    } 
  return (
    <Stack direction="column" spacing={5}>
    <Stack spacing={3} direction='row'>
        <Button variant="text" href="https://google.com">Google</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outline</Button>
    </Stack>
    <Stack spacing={4} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="text" color="success">Success</Button>
    </Stack>
    <Stack direction="row" spacing={3}>
        <Button variant="contained" color="primary" size="small">small</Button>
        <Button variant="contained" color="primary" size="medium">medium</Button>
        <Button variant="contained" color="primary" size="large">large</Button>
    </Stack>
    <Stack direction="row" spacing={4}>
        <Button startIcon={<SendIcon/>} variant="contained" color="secondary" >Send</Button>
        <Button endIcon={<DeleteIcon/>} variant="contained" color="error" disableElevation disableRipple>Delete</Button>
    </Stack>
    <Stack direction="row" spacing={3}>
        <IconButton aria-label="delete" size="small" color="error">
            <DeleteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton aria-label="delete" size="medium" color="error">
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large" color="error">
            <DeleteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton aria-label="fingerprint" size="large" color="success">
            <Fingerprint fontSize="inherit"/>
        </IconButton>
        <IconButton aria-label="fingerprint" size="medium" color="error">
            <Fingerprint fontSize="inherit"/>
        </IconButton>
        <IconButton aria-label="fingerprint" size="small" color="primary">
            <Fingerprint fontSize="inherit"/>
        </IconButton>
        <Stack direction="row" >
            <ButtonGroup variant="contained" color="secondary" orientation="vertical">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction="row">
                <ToggleButtonGroup aria-label="text-formating" value={formats} onChange={handleFormatChange} size="small" orientation="horizontal" color="success" >
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBold/>
                </ToggleButton> 
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
    </Stack>
  )
}
