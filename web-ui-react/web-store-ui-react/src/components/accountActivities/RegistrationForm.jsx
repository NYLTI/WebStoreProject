import '../../css/registrationform.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from "react";
import { completeRegister } from '../../services/consumerservices/ConsumerFunctions';
import Swal from 'sweetalert2';

function RegistrationForm() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [address, setAddress] = useState({
        street: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: ""
    });

    useEffect(() => {
        function setUserFromStorage() {
            const storedUser = JSON.parse(sessionStorage.getItem("user"));
            if (storedUser) {
                setUser(() => ({
                    ...storedUser
                }));
            }
        }
        setUserFromStorage();  // Fetch user data from sessionStorage
    }, []);

    // Handle user input changes for firstName and lastName
    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    // Handle address input changes
    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value
        }));
    };

    const finishRegistration = (e) => {
        e.preventDefault();

        // Merge user and address before submitting
        const updatedUser = {
            ...user,
            address: { ...address }
        };
        completeRegister(updatedUser)
            .then((res) => {
                if (res.statusText === "Accepted") {
                    sessionStorage.setItem('user', JSON.stringify(res.data));
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Complete',
                        text: 'Your registration is now complete'
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Request Failed',
                    text: 'Something went wrong'
                });
            });
    };

    return (
        <div className="container">
            <form onSubmit={finishRegistration}>
                <div className="row">
                    {user ? (
                        <>
                            <h2>Complete Registration</h2>
                            <div className="input-group input-group-icon">
                                <input readOnly type="text" value={user.email} />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    required
                                    type="text"
                                    name="firstName"
                                    minLength="2"
                                    placeholder="First Name"
                                    value={user.firstName}
                                    onChange={handleUserChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    required
                                    type="text"
                                    name="lastName"
                                    minLength="2"
                                    placeholder="Last Name"
                                    value={user.lastName}
                                    onChange={handleUserChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    required
                                    type="text"
                                    minLength="2"
                                    name="street"
                                    placeholder="Address Line 1"
                                    value={address.street}
                                    onChange={handleAddressChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    type="text"
                                    name="addressLine2"
                                    placeholder="Address Line 2 (optional)"
                                    value={address.addressLine2}
                                    onChange={handleAddressChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    required
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={address.city}
                                    onChange={handleAddressChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    required
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    value={address.state}
                                    onChange={handleAddressChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="input-group input-group-icon">
                                <input
                                    type="text"
                                    name="postalCode"
                                    pattern="^[0-9]{5}(?:-[0-9]{4})?$"
                                    required
                                    placeholder="Zip Code"
                                    value={address.postalCode}
                                    onChange={handleAddressChange}
                                />
                                <div className="input-icon"><i className="fa fa-user"></i></div>
                            </div>
                            <div className="center">
                                <button type="submit" className="btn-signup">Complete Registration</button>
                            </div>
                        </>
                    ) : (
                        <p>Please log in to complete registration</p>
                    )}
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
