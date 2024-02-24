import React from "react";
import Face4Icon from '@mui/icons-material/Face4';
import FaceIcon from '@mui/icons-material/Face';

export default function Header() {

    return (
        <div class='header'>
            <div style={{ position: 'fixed', left: '15px', top:'5px' }}>
                <Face4Icon color="primary" sx={{ fontSize: '4rem' }} />
                <FaceIcon color="primary" sx={{ fontSize: '4rem' }} />
            </div>
        </div>
    )
}