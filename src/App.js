import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

//IMGS
import chronosLogo from './assets/chronos_logo.png'
import imgGalaxy from './assets/galaxy.png'

function App() {
    return (
        <div className="">

            <div className="container-circle mb-5">
                <img className="img-galaxy" src={imgGalaxy} width="150px"></img>
                <div className="circle"></div>
                <img className="img-node" src={chronosLogo} width="150px"></img>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

            <div className="text-center text-light font-fa container-text">
                <div className="mb-3 text-center text-light font-fa">
                    <p>Chronos 1.0.0</p>
                    <p className="text-animation text-line">bem vindo(a), informe seu usuário e senha...</p>
                </div>
                <div className="row">
                    <div className="col-6 text-end">
                        <p className="text-user">usuario:</p>
                    </div>
                    <div className="col-6 text-start">
                        <input class="input-user" type="text" placeholder="1011010"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-end">
                        <p className="text-user">senha:</p>
                    </div>
                    <div className="col-6 text-start">
                        <input className="input-user" type="password" placeholder="*****"></input>
                    </div>
                </div>
                <div className="mt-4 px-5">
                    <button type="button" className="btn-access">acessar</button>
                </div>
                <div className="row mt-2 px-5">
                    <div className="col">
                        <button type="button" className="btn-col">não tenho acesso</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn-col">esqueci minha senha</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
