import React from 'react';

function AddContact(props) {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form action="" className="ui form">
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name..." />
                </div>
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" placeholder="moin@gmail.com" />
                </div>
                <button className="ui button blue">Add button</button>
            </form>
        </div>
    );
}

export default AddContact;