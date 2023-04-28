import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../layout/metadata';
import { MDBDataTable, MDBTable } from 'mdbreact';
import { clearErrors, myOrders } from '../../actions/preinscriptions_actions';
import { Link } from 'react-router-dom';

export const MyOrder = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth)
  const { loading, orders, error } = useSelector(state => state.myOrders)

  useEffect(() => {

    dispatch(myOrders())

    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
  }, [dispatch, alert, error])

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Pre-registration date",
          field: "fecha",
          sort: "asc"
        },
        {
          label: "Service Id",
          field: "id",
          sort: "asc"
        },
        {
          label: "Number Id",
          field: "numberId",
          sort: "asc"
        },
        {
          label: "State",
          field: "estado",
          sort: "asc"
        },
        {
          label: "Acciones",
          field: "acciones",
          sort: "asc"
        },
      ],
      rows: []
    }


    orders.forEach(order => {
      var fecha = new Date(order.fechaRegistro).toLocaleDateString()
      data.rows.push({
        fecha: fecha,
        id: order.producto,
        numberId: order.numeroId,
        estado: order.estado && String(order.estado).includes("CANCELADO")
          ? <p style={{ color: "red" }}>{order.estado}</p>
          : <p style={{ color: "green" }}>{order.estado}</p>
          && String(order.estado).includes("SIN RESERVAR FECHA")
          ? <p style={{ color: "yellow" }}>NO DATE SCHEDULED</p>:
          <p>{order.estado}</p>,
        acciones:
          <Link to={`/order?idOrder=${order._id}&idServicio=${order.service}&idProduct=${order.producto}`} className="btn btn-primary">
            <i class="bi bi-eye"></i></Link>
      })
    })
    return data;
  }

  return (
    <Fragment>
      <MetaData title={"MY ORDERS"}></MetaData>
      <div className='backgroundOrder'>
        <div className='container container-fluid d-flex justify-content-center align-items-center'>
          <div className='row'>
            <h2 className='quantify text-black my-5 text-center'> My Orders</h2>
            <div className='col-12 col-md-12'>
              <Fragment>
                {user ? (
                  <Fragment>
                    <h5 className='cafe text-secondary text-center'>User: <span className='text-black'><b>{user._id} </b></span></h5>
                    <h5 className='cafe text-info text-center'>Name: <span className='text-black'><b>{user.nombre} {user.apellido} </b></span></h5>
                  </Fragment>
                ) : !loading}
                {loading ?
                  <div className='d-flex justify-content-center align-items-center m-5'>
                    <h2 className='quantify text-white'> Loading...</h2>
                  </div> : (
                    <div className='d-flex justify-content-center align-items-center'>
                      <MDBDataTable
                        data={setOrders()} className="px-3 bordered striped hover text-white border border-danger m-2 p-2 cardTransparentTwo">
                      </MDBDataTable>
                    </div>
                  )}
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
