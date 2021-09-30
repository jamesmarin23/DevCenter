import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ActivarEmpresa from "./parts/RegistrarVenta";
import NuevoProducto from "./parts/NuevoProducto";

import Model from '../Model';

export class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        var user = Model.getUser();
        this.setState({ user: user });
    }

    render() {
        return (
            <div>
                {
                    (this.state.user !== null) ?
                        <Router>
                            <div>
                                <div id="dashBoard">
                                    <div id="wrapper">

                                        {/* Banda lateral con el nombre de la app y la lista de menus */}
                                        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                                            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                                                {/* <div className="sidebar-brand-icon">
                                                    <i className="mdi mdi-store"></i>
                                                </div> */}
                                                <div className="mx-1" style={{ textTransform: 'none' }}>
                                                    DevCenter
                                                </div>
                                            </a>
                                            <hr className="sidebar-divider my-0" />
                                            <li className="nav-item active">
                                                <a className="nav-link" href="/Vender">
                                                    <i className="mdi mdi-cart"></i>
                                                    <span>Registrar Venta</span>
                                                </a>
                                            </li>

                                            <hr className="sidebar-divider" />
                                            <div className="sidebar-heading">
                                                Productos
                                            </div>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/NuevoProducto">
                                                    <i className="mdi mdi-apple"></i>
                                                    <span>Nuevo Producto</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link collapsed" href="/ListaProductos" >
                                                    <i className="mdi mdi-card-account-details-star"></i>
                                                    <span>Ver Productos</span>
                                                </a>
                                            </li>

                                            <hr className="sidebar-divider" />
                                            <div className="sidebar-heading">
                                                Ventas
                                            </div>
                                            <li className="nav-item">
                                                <a className="nav-link collapsed" href="/ListaVentas">
                                                    <i className="mdi mdi-receipt"></i>
                                                    <span>Consultar Ventas</span>
                                                </a>
                                            </li>

                                            <hr className="sidebar-divider" />
                                            <div className="sidebar-heading">
                                                Usuarios
                                            </div>
                                            <li className="nav-item">
                                                <a className="nav-link collapsed" href="/ListaUsuarios">
                                                    <i className="mdi mdi-account"></i>
                                                    <span>Listar Usuarios</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div id="content-wrapper" className="d-flex flex-column">
                                            <div id="content">

                                                {/* Banda de arriba, donde se muestra el boton del usuario logueado */}
                                                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                                    <ul className="navbar-nav ml-auto">
                                                        <li className="nav-item dropdown no-arrow">
                                                            <a className="nav-link dropdown-toggle" href="/test" id="userDropdown" role="button"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="mdi mdi-account" style={{ fontSize: 25 }} ></i>
                                                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                                                    {this.state.user.Nombre}
                                                                </span>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                                                <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal"
                                                                    onClick={
                                                                        (e) => {
                                                                            e.preventDefault();
                                                                            Model.logOut();
                                                                            window.location.reload(false);
                                                                        }
                                                                    }
                                                                >
                                                                    <i className="mdi mdi-logout mr-2 text-gray-400"></i>
                                                                    Cerrar Sesion
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </nav>

                                                {/* Aqui se agregan los menus para que al ser seleccionados se muestren */}
                                                <Switch>
                                                    <Route path="/Vender" children={<ActivarEmpresa></ActivarEmpresa>}>
                                                    </Route>
                                                    <Route path="/NuevoProducto" children={<NuevoProducto></NuevoProducto>}>
                                                    </Route>
                                                    {/*
                                                    <Route path="/ListaProductos" children={<ListaProductos></ListaProductos>}>
                                                    </Route> */}
                                                </Switch>

                                            </div>

                                            <footer className="sticky-footer bg-white">
                                                <div className="container my-auto">
                                                    <div className="copyright text-center my-auto">
                                                        <span>&copy; DevCenter 2021</span>
                                                    </div>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Router >
                        : null
                }
            </div>
        );
    }
}

export default DashBoard;