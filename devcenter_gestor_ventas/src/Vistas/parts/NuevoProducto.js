import React, { Component } from "react";
import Model from '../../Model';

export class NuevoProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xl-12 col-md-12 mb-4">
                        <div className="container card border-left-primary shadow h-100 py-0">
                            <div className="card-body">
                                <div className="section-title text-md-left text-center">
                                    <h4 className="title mb-0 text-primary title-dark">
                                        Nuevo Producto
                                    </h4>

                                    <div className="row">

                                        {/* Producto: Nombre, descripción y precio*/}
                                        <div className="col-lg-12 mb-2 mt-2">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="mdi mdi-apple"></i>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Nombre" name="nombreP" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2 mt-2">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="mdi mdi-clipboard-edit"></i>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Descripción" name="descripcion" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2 mt-2">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="mdi mdi-currency-usd"></i>
                                                    </div>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Precio" name="precio" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-2 mt-2">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="mdi mdi-numeric-1-box-multiple-outline"></i>
                                                    </div>
                                                </div>
                                                <input type="number" className="form-control" placeholder="Cantidad" name="cantidad" required="" />
                                            </div>
                                        </div>


                                        {/* Boton Guardar */}
                                        <div className="col-lg-12 mt-2">
                                            <button className="btn btn-success btn-block font-weight-bold">
                                                <i className="mdi mdi-check-decagram"></i>
                                                {" AÑADIR PRODUCTO"}
                                            </button>
                                        </div>

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

export default NuevoProducto;


