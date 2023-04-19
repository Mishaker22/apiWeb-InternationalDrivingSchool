import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/metadata'
import Sidebar from './sidebar'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, deleteUser, getUsers } from '../../actions/user_actions'

export const UserList = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector(state => state.users)

  const deleteUserHandler = (id) => {
    const response = window.confirm("Estas seguro de querer eliminar este usuario?")
    if (response) {
      dispatch(deleteUser(id))
      window.location.reload(false)
      alert.success("Servicio eliminado correctamente")
    }
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors)
    }

    dispatch(getUsers())

  }, [dispatch])

  const setUsers = () => {
    const data = {
      columns: [
        {
          label: "Nombre",
          field: "nombre",
          sort: "asc"
        },
        {
          label: "Apellido",
          field: "apellido",
          sort: "asc"
        },
        {
          label: "Email",
          field: "email",
          sort: "asc"
        },
        {
          label: "Role",
          field: "role"
        },
        {
          label: 'Acciones',
          field: 'acciones',
        },
      ],
      rows: []
    }
    users.forEach(user => {

      data.rows.push({
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        role: user.role,
        acciones: <Fragment>
          <Link to={`/admin/updateUser/${user._id}`} className="btn btn-info py-1 px-2">
            <i class="bi bi-pen"></i>
          </Link>
          <button className="btn btn-danger py-1 px-2 ms-1" onClick={() => deleteUserHandler(user._id)}>
            <i class="bi bi-trash3"></i>
          </button>
        </Fragment>
      })
    })

    return data;

  }
  return (
    <Fragment>
      <MetaData title={"all users"}></MetaData>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-2'>
            <Sidebar></Sidebar>
          </div>
          <div className='col-12 col-md-10'>
            <Fragment>
              <h1 className='my-5 quantify text-danger'> Usuarios Registrados</h1>
              {loading ?
                <div className='d-flex justify-content-center align-items-center m-5'>
                  <h2 className='quantify text-white'> Loading...</h2>
                </div> : (
                  <MDBDataTable
                    data={setUsers()} className="px-3 bordered striped hover text-white border border-danger m-2 p-2">

                  </MDBDataTable>
                )}
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
