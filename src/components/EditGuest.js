const { Fragment } = require("react")

import React { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const Editemployee = route => {
    let history = useHistory();
    const { guests, editGuest } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser ] = useState ({
    id: null,
    name: "",
    designation: "",
    location: ""
    });
}
const currentUserId = route.match.params.id;

useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(emp => emp.id === parseInt(guestId));
    setSelectedUser(selectedUser);
}, []);
0





























