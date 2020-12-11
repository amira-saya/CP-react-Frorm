import React from 'react';

function App() {
  return (
    
    <div>

 <h1 className='title red'>Your name here</h1>



 <img src={"/imageInSrc.jpg"} alt="imageSrc"/>



 <img src={"/imageInPublic.jpg"} />



<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
</div>

  );
}

export default App;
