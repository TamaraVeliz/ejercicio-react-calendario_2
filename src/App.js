import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: [
        new Date().getDate(),
        " de ",
        new Date().getMonth() + 1,
        " del ",
        new Date().getFullYear()
      ],
      tiempo: [
        new Date().getHours(),
        ":",
        new Date().getMinutes(),
        ":",
        new Date().getSeconds()
      ],
      reloj: setInterval(() => {
        this.setState({
          tiempo: [
            new Date().getHours(),
            ":",
            new Date().getMinutes(),
            ":",
            new Date().getSeconds()
          ]
        });
      }, 1000),
      mostrar: false,
      btnTxt: {
        on: "Mostrar fecha",
        off: "Ocultar fecha"
      }
    };
  }

  toggle() {
    //mostrat = !mostrar
    // NO!! this.state.mostrar = !this.state.mostrar --- asi no se modifica el valor del estado.
    this.setState({
      mostrar: !this.state.mostrar // SI!! --- asi se modifica el valor del estado
    });
  }

  render() {
    return (
      <div>
        <nav className=" header navbar navbar-dark bg-dark">
          <div className="container">
            <div className="row m-auto">
              <i className="fa fa-hand-pointer-o fa-4x text-white" />
              <div className="h1 ml-2 my-auto text-light" href="/">
                Botón on/off
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="container">
            <div className="d-flex flex-row">
              <div className="col-md-4 mx-auto">
                <div className="panel">
                  <button
                    onClick={() => this.toggle()}
                    type="button"
                    className="btn btn-primary"
                  >
                    {this.state.mostrar
                      ? this.state.btnTxt.off
                      : this.state.btnTxt.on}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="d-flex flex-row">
              <div class="col-md-4 mx-auto">
                <div class="display">
                  <div class="display-time">{this.state.tiempo}</div>

                  <div class="display-date">
                    {this.state.mostrar ? this.state.fecha : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
