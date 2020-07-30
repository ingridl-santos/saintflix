import React from  'react';
import HeaderDefault from '../../components/pageDefault/headerDefault';

const iframe = '<iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600"></iframe>';

function Iframe(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}}/>
  );
}

function Pagina404() {
  return (
    <HeaderDefault>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1>Opa! Quebrou tudo D:</h1>
        <p>
          <a href="/"> Se quiser pode voltar pra home ooooou jogar um pouquinho :v</a>
        </p>
        <Iframe iframe={iframe}/>
      </div>
    </HeaderDefault>
  );
}

export default Pagina404;