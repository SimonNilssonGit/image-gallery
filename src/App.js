import { useState } from 'react';

import './index.css';

import Model from './components/Model/Model';
import Title from './components/Title/Title';
import UploadForm from './components/UploadForm/UploadForm';
import ImageGrid from './components/ImageGrid/ImageGrid';

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
     
    </div>
  );
}

export default App;

