import {Notes} from './components/Notes'
import styled from 'styled-components';
import Bg from './Bg.jpg'
import {Brown} from './style/GlobalStyle'

function App() {
  return (
    <AppStyle className="App">
      <h1 className="App-title">YOUR NOTES</h1>
        <div className="container">
          <Notes/>
        </div>    
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
