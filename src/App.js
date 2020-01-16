import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username">Username do GitHub</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">SALVAR</button>{' '}
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/29542456?s=460&v=4"
                alt="Hiago Souza"
              />
              <div className="user-info">
                <strong>Hiago Souza</strong>
                <span>NodeJS, React e ReacNative</span>
              </div>
            </header>
            <p>Software Developer apaixonado pelo que faço!</p>
            <a href="https://github.com/hiagofss">Acessar Perfil do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/29542456?s=460&v=4"
                alt="Hiago Souza"
              />
              <div className="user-info">
                <strong>Hiago Souza</strong>
                <span>NodeJS, React e ReacNative</span>
              </div>
            </header>
            <p>Software Developer apaixonado pelo que faço!</p>
            <a href="https://github.com/hiagofss">Acessar Perfil do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/29542456?s=460&v=4"
                alt="Hiago Souza"
              />
              <div className="user-info">
                <strong>Hiago Souza</strong>
                <span>NodeJS, React e ReacNative</span>
              </div>
            </header>
            <p>Software Developer apaixonado pelo que faço!</p>
            <a href="https://github.com/hiagofss">Acessar Perfil do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/29542456?s=460&v=4"
                alt="Hiago Souza"
              />
              <div className="user-info">
                <strong>Hiago Souza</strong>
                <span>NodeJS, React e ReacNative</span>
              </div>
            </header>
            <p>Software Developer apaixonado pelo que faço!</p>
            <a href="https://github.com/hiagofss">Acessar Perfil do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/29542456?s=460&v=4"
                alt="Hiago Souza"
              />
              <div className="user-info">
                <strong>Hiago Souza</strong>
                <span>NodeJS, React e ReacNative</span>
              </div>
            </header>
            <p>Software Developer apaixonado pelo que faço!</p>
            <a href="https://github.com/hiagofss">Acessar Perfil do GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/29542456?s=460&v=4"
                alt="Hiago Souza"
              />
              <div className="user-info">
                <strong>Hiago Souza</strong>
                <span>NodeJS, React e ReacNative</span>
              </div>
            </header>
            <p>Software Developer apaixonado pelo que faço!</p>
            <a href="https://github.com/hiagofss">Acessar Perfil do GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
