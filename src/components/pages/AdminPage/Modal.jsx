/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Modal = ({ id, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const feedback = e.target.feedback.value;
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'Feed Back',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Send it!'
            });
            if (result.isConfirmed) {
                await axiosSecure.patch(`/classes/${id}`, { feedback });
                Swal.fire('FeedBack!', 'Your Feedback has been sent.', 'success');
                e.target.feedback.value = '';
                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Write your feedback Here!!</h3>
                    <form onSubmit={handleSubmit} action="">
                        <textarea
                            name="feedback"
                            className="textarea textarea-success  w-full"
                            placeholder="Write your feedback, why you approve or deny the classes, so that instructor can understand what is the mistake he done."
                        />
                        <button type="submit" className="btn btn-primary">
                            Submit FeedBack
                        </button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                </label>
            </div>
        </div>
    );
};

export default Modal;
