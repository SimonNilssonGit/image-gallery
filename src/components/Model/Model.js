import React from 'react'
import { motion } from 'framer-motion';

import './ModelStyles.css';

const Model = ({selectedImg, setSelectedImg}) => {
    
    const handleClick = (e) => {
        if(e.target.classList.contains('img-container')){
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="img-container">
            <motion.img src={selectedImg} alt="enlarged" 
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
            </div>
        </motion.div>
    )
}

export default Model
