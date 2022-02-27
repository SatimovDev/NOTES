import {Notes} from './components/Notes'
import styled from 'styled-components';
import Bg from './Bg.jpg'
import {Brown} from './style/GlobalStyle'
import {Add} from './components/Add'
import {Modal} from './components/Modal'
import { useState } from 'react';

function App() {

  const [isOpenModal , setIsOpenModal] = useState(false)

  return (
    <AppStyle className="App">
      <h1 className="App-title">YOUR NOTES</h1>
        <div className="container">
          <Notes/>
        </div>    
        <Add setIsOpenModal={setIsOpenModal}/>

        {
          isOpenModal ? <Modal setIsOpenModal={setIsOpenModal}/> : ''
        }
        
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  .App-title{
    text-align: center;
    padding: 40px 0 60px 0;
    color: ${Brown};
    font-size: 50px;
  }
  .container{
    width: 80%;
    margin: 0 auto;
  }
`

export default App;