import React, { useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';

import { MdEmojiPeople } from 'react-icons/md';
import SharedTitle from '../../../layouts/shared/SharedTitle';

const ManageUsers = () => {
    const [isClicked, setIclicked] = useState(false);
    const handeleInstrcutor = (id) => {
        setIclicked((ps) => !ps);
    };
    const handeleAdmin = (id) => {
        setIclicked((ps) => !ps);
    };
    return (
        <div>
            <SharedTitle title1="Mange" title2="Users" />
            <div className="overflow-x-auto">
                <table className="table z-10 table-zebra max-w-5xl mx-auto text-xl font-semibold text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>h1ll</td>
                            <td>Cy Ganderton</td>

                            <td>
                                <button type="button" className="btn btn-circle btn-outline" onClick={handeleInstrcutor} disabled={isClicked}>
                                    <MdEmojiPeople size={30} />
                                </button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-circle btn-outline" onClick={handeleAdmin} disabled={isClicked}>
                                    <RiAdminFill size={30} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
