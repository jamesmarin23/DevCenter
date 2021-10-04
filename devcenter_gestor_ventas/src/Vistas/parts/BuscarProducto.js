import React, { Component } from "react";
import GridTable from "@nadavshaar/react-grid-table";

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
                        <div className="container card border-left-primary shadow h-100 py-0">
                            <div className="card-body">
                                <div className="section-title text-md-left text-center">
                                    <h4 className="title mb-0 text-primary title-dark">
                                        Lista de Productos
                                    </h4>

                                    <div className="row">
                                        <div className="col-lg-12 mb-2 mt-2">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="mdi mdi-magnify"></i>
                                                    </div>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Buscar" name="producto" required="" />
                                            </div>
                                        </div>

                                        {/* <div className="col">
                                            <button className="btn btn-success  font-weight-bold">
                                                <i className="mdi mdi-magnify"></i>
                                                {" Buscar Producto"}
                                            </button>
                                        </div> */}
                                    </div>

                                    <table class="table table-bordered table-sm">
                                        <thead>
                                            <th scope="col">Codigo</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Marca</th>
                                            <th scope="col">Valor</th>
                                        </thead>
                                        <tbody>
                                            <th scope="row">1</th>
                                            <td>Manzana</td>
                                            <td>Manzana Roja</td>
                                            <td>Frutas</td>
                                            <td>Frescampo</td>
                                            <td>2500</td>
                                        </tbody>
                                    </table>

                                    {/* <GridTable showRowsInformation={false} isPaginated={false} columns={[
                                        {
                                            id: 1,
                                            field: "Codigo",
                                            label: "Codigo"
                                        },
                                        {
                                            id: 2,
                                            field: "Nombre",
                                            label: "Nombre"
                                        },
                                        {
                                            id: 3,
                                            field: "Categoria",
                                            label: "Categoria"
                                        },
                                        {
                                            id: 4,
                                            field: "Marca",
                                            label: "Marca"
                                        },
                                        {
                                            id: 5,
                                            field: "Valor",
                                            label: "Valor"
                                        }
                                    ]}
                                        rows={[
                                            {
                                                Codigo: 1,
                                                Nombre: "Manzana",
                                                Categoria: "Frutas",
                                                Marca: "Frescampo",
                                                Valor: 2500
                                            },
                                        ]} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuscarProducto;

