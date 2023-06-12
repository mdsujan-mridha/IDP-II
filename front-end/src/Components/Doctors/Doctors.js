import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import doctor1 from "../Assets/Doctor-1.png";
import doctor2 from "../Assets/Doctor-2.png";
import doctor3 from "../Assets/Doctor-3.png";
import doctor4 from "../Assets/Doctor-4.png";
import doctor5 from "../Assets/Doctor-5.png";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getDoctor } from '../../actions/doctorAction';
import Loader from '../../Share/Loader';
import Doctor from './Doctor';
import Pagination from 'react-js-pagination';

import "./doctors.css";


const Doctors = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const {
        loading,
        doctors,
        error,
        doctorsCount,
        resultPerPage,
        filteredDoctorsCount

    } = useSelector((state) => state.doctors);

    useEffect(() => {

        if (error) {
            console.log(error);
            dispatch(clearErrors())
        }

        dispatch(getDoctor(currentPage))

    }, [error, dispatch, currentPage]);
    // console.log(doctors);

    let count = filteredDoctorsCount;

    // page setup 
    const setCurrentPageNo = (e) => {
        setCurrentPage(e);

    }
    // refresh page
    // function refreshPage() {
    //     window.location.reload(false);
    // }

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>
                            <section className='mt-10 grid grid-cols-1 gap-10'>
                                {
                                    doctors &&
                                    doctors?.map((doctor) => (
                                        <Doctor
                                            key={doctor?._id}
                                            doctor={doctor}
                                        >
                                        </Doctor>
                                    ))
                                }
                            </section>
                            {
                                resultPerPage < count && (
                                    <div className="paginationBox">
                                        <Pagination
                                            activePage={currentPage}

                                            itemsCountPerPage={resultPerPage}
                                            totalItemsCount={doctorsCount}
                                            onChange={setCurrentPageNo}
                                            nextPageText="Next"
                                            prevPageText="Prev"
                                            firstPageText="First"
                                            lastPageText="Last"
                                            itemClass='page-item'
                                            linkClass='page-link'
                                            activeClass='pageItemActive'
                                            activeLinkClass='pageLinkActive'
                                        ></Pagination>
                                    </div>
                                )
                            }
                        </Fragment>




                    )
            }
        </Fragment>
    );
};

export default Doctors;

// doctor card 