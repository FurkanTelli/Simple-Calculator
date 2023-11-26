import { useState } from "react";
import * as math from "mathjs";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("");
  const [theme, setTheme] = useState(false)

  const catchBtnValue = (value) => {
    setScreen((prevScreen) => prevScreen + value);
  };

  const calculateResult = () => {
    try {
      const result = math.evaluate(screen);
      setScreen(result.toString());
      console.log(screen)
    } catch (error) {
      setScreen("Error");
    }
  };

  const toggleTheme = () => {
    setTheme(!theme)
    console.log(theme)
  }

  const getThemeClass = () => (theme ? "dark-theme" : "light-theme");

  return (
    <div className={`calculator-container ${getThemeClass()} `}>
      <div className={`calculator ${getThemeClass()}`}>
        <div className="d-flex align-items-center">
          <div>
          <input type="text" value={screen} className="form-control mb-3" readOnly />
          </div>
            <div class="form-check form-switch rotate">
              <input value={theme} onChange={toggleTheme} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
        </div>
        <div className="row">
          <button type="button" value="7" className="col btn btn-light" onClick={() => catchBtnValue("7")}>
            7
          </button>
          <button type="button" value="8" className="col btn btn-light" onClick={() => catchBtnValue("8")}>
            8
          </button>
          <button type="button" value="9" className="col btn btn-light" onClick={() => catchBtnValue("9")}>
            9
          </button>
          <button type="button" className="col btn btn-warning" onClick={() => setScreen("")}>
            C
          </button>

          <button type="button" value="4" className="col btn btn-light" onClick={() => catchBtnValue("4")}>
            4
          </button>
          <button type="button" value="5" className="col btn btn-light" onClick={() => catchBtnValue("5")}>
            5
          </button>
          <button type="button" value="6" className="col btn btn-light" onClick={() => catchBtnValue("6")}>
            6
          </button>
          <button type="button" value="+" className="col btn btn-light" onClick={() => catchBtnValue("+")}>
            +
          </button>

          <button type="button" value="1" className="col btn btn-light" onClick={() => catchBtnValue("1")}>
            1
          </button>
          <button type="button" value="2" className="col btn btn-light" onClick={() => catchBtnValue("2")}>
            2
          </button>
          <button type="button" value="3" className="col btn btn-light" onClick={() => catchBtnValue("3")}>
            3
          </button>
          <button type="button" value="-" className="col btn btn-light" onClick={() => catchBtnValue("-")}>
            -
          </button>

          <button type="button" value="." className="col btn btn-light" onClick={() => catchBtnValue(".")}>
            .
          </button>
          <button type="button" value="0" className="col btn btn-light" onClick={() => catchBtnValue("0")}>
            0
          </button>
          <button type="button" value="/" className="col btn btn-light" onClick={() => catchBtnValue("/")}>
            /
          </button>
          <button type="button" value="*" className="col btn btn-light" onClick={() => catchBtnValue("*")}>
            *
          </button>
        </div>

        <div className="row">
          <button type="button"  onClick={calculateResult} className="col btn btn-danger">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
