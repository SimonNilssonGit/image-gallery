import React, { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import './UploadFormStyles.css';

const UploadForm = () => {
    // Store file
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    // Allowed file types
    const fileTypes = ['image/png', 'image/jpeg']
    const uploadHandler = (e) => {
        // Select first file
        let selected = e.target.files[0];
        // Check if a file is selected and if it's a allowed type
        if(selected && fileTypes.includes(selected.type)){
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Select an image (png/jpeg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={uploadHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error"> {error} </div> }
                {file && <div className="error"> {file.name} </div> }
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm
