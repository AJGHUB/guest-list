import React { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState"; 
import { useHistory, Link } from "react-router-dom";

export const EditGuest = route => {
    let history = useHistory();
    const { guests, editGuest } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser ] = useState ({
    id: null,
    name: "",
    designation: "",
    location: ""
    });
const currentUserId = route.match.params.id;

useEffect(() => {
    const guestId = currentUserId;
    const selectedUser = guests.find(emp => emp.id === parseInt(guestId));
    setSelectedUser(selectedUser);
}, []);

const onSubmit = e => {
    e.preventDefault();
    editGuest(selectedUser);
    history.push("/");
};

const handleOnChange = (userKey, value) =>
setSelectedUser({ ...selectedUser, [userKey]: value });

if(!selectedUser || !selectedUser.id) {
    alert("ID does not match!");
}

return (
    <Fragment>
        <div className="w-full max-w-sm container mt-20 mx-auto">
            <form onSubmit={onSubmit}>
            <div className="w-full mb-5">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                >
                    Name of Guest
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                    value={selectedUser.name}
                    onChange={e => handleOnChange("name", e.target.value)}
                    type="text"
                    placeholder="Enter Guests Name"
                />
            </div>
            <div className="w-full mb-5">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="location"
                    >
                        Location
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                    value={selectedUser.location}
                    onChange={e => handleOnChange("location", e.target.value)}
                    type="text"
                    placeholder="Enter Location"
                />
            </div>
            <div className="w-full mb-5">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="designation"
                     >
                        Designation
                </label>
                <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                     value={selectedUser.designation}
                     onChange={e => handleOnChange("designation", e.target.value)}
                     type="text"
                     placeholder="Enter Guest Designation"
                />
                </div>
                <div className="flex items-center justify-between">
                    <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:shadow-outline">
                    Edit Guest
                     </button>
                </div>
                <div className="text-center mt-4 text-gray-500">
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        </div>
    </Fragment>
    );
 };





























