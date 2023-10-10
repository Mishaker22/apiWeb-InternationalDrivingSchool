import React, { Fragment, useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getUsers } from '../../actions/user_actions';

export const Employee = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, users, error } = useSelector(state => state.users)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }

        dispatch(getUsers(), error)

    }, [dispatch])
    return (
        <Fragment>
            <section className=''>
                <div className='divEmployess'>
                    {users.filter(user => user.role === "employee" || user.role === "admin").map(u => (
                        <div className='containerEmployees d-flex justify-content-center align-items-center'>
                            <div className='cardEmployees d-flex justify-content-center align-items-center'>
                                <div className='contentEmployees'>
                                    <div className='contentEmBx'>
                                        <h5 className='text-danger'>Role: <span className='text-white'>{u.role} </span></h5>
                                    </div>
                                    <div className='imgBxE'> <img className="" src={u.avatar && u.avatar.url} alt={u && u.nombre} /></div>
                                    <div className='contentEmBx'>
                                        <h5 className='text-danger text-center'>Nombre: <span className='text-white'>{u.nombre}{u.apellido} </span></h5>
                                    </div>
                                </div>
                                <div className='scie'>
                                    <h6 className='text-danger'>Email: <span className='text-black'>{u.email} </span></h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Fragment>
    )
}
