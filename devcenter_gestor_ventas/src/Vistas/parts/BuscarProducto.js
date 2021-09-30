import React, { Component } from "react";

export class BuscarProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div classname="row">
                    <div className="col">
                        Lista de Productos
                        <table classname="table table-bordered">
                            <thead>
                                <th scope="col">
                                    Codigo
                                </th>
                                <th scope="col">
                                    Nombre
                                </th>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}

export default BuscarProducto;

