import React, { useState } from 'react';

function Change() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password don't match!");
            return;
        }
        console.log('Form submitted:', { currentPassword, newPassword });
        // Add API or logic to handle password change
    };

    return (
        <div className="color" >
        <div className="change-password-container">
            <form onSubmit={handleSubmit}>
                <h2>Create New Password</h2>
                <p className="text-muted">
                    Your new password must be different from previously used passwords.
                </p>
                <div className="box">
                    <p className="text-muted">Current Password</p>
                    <input
                        type="password"
                        id="currentpass"
                        name="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="box">
                    <p className="text-muted">New Password</p>
                    <input
                        type="password"
                        id="newpass"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="box">
                    <p className="text-muted">Confirm Password</p>
                    <input
                        type="password"
                        id="confirmpass"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="button">
                    <input type="submit" value="Save" className="btn" />
                </div>
            </form>
        </div>
        </div>
    );
}

export default Change;
