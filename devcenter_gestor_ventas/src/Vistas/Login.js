import React, { Component } from "react";
import Model from '../Model';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        Model.setUser({
            Nombre: "Nombre Usuario",
            Email: "prueba@gmail.com"
        });
        window.location.replace("/Vender")
    }

    render() {
        return (
            <div id="signUp">
                <section className="bg-home bg-circle-gradiant d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-8">
                                <div className="card login_page shadow rounded border-1">
                                    <div className="card-body">
                                        <h4 className="card-title text-center">
                                            <img src="favicon/favicon-96x96.png" className="img-fluid d-block mx-auto" alt="" />
                                            {(this.state.loading) ? null : "DevCenter - Inicio de Sesion"}
                                        </h4>
                                        <form className="login-form mt-4" onSubmit={this.handleSubmit}>
                                            <div className="row">

                                                {/* Campo de usuario */}
                                                <div className="col-lg-12 mb-2">
                                                    <label>
                                                        Usuario
                                                    </label>
                                                    <div className="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i className="mdi mdi-account"></i>
                                                            </div>
                                                        </div>
                                                        <input type="email" className="form-control" placeholder="Nombre de Usuario" name="email" required="" />
                                                    </div>
                                                </div>

                                                {/* Campo de contraseña */}
                                                <div className="col-lg-12 mb-3">
                                                    <label>
                                                        Contraseña
                                                    </label>
                                                    <div className="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <i className="mdi mdi-key"></i>
                                                            </div>
                                                        </div>
                                                        <input type="password" className="form-control" placeholder="Contraseña de Ingreso" required="" />
                                                    </div>
                                                </div>

                                                {/* Boton de inicio de sesion */}
                                                <div className="col-lg-12 mb-0">
                                                    <button className="btn btn-primary btn-block">Ingresar</button>
                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-7 d-lg-block d-none">
                                <div className="mr-lg-5">
                                    <img src="images/auth/signup.png" className="img-fluid d-block mx-auto" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Login;
