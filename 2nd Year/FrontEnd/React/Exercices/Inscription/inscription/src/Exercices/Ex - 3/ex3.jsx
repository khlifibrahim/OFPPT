import { useState } from 'react'

function Ex3() {
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError('Password must include at least one uppercase letter.');
    } else if (!/[a-z]/.test(newPassword)) {
      setPasswordError('Password must include at least one lowercase letter.');
    } else if (!/\d/.test(newPassword)) {
      setPasswordError('Password must include at least one number.');
    } else {
      setPasswordError('');
    }

    if (confirmPassword && newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (password !== newConfirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError || confirmPasswordError) {
      alert('Please fix the errors before submitting.');
      return;
    }

    alert('Password successfully set!');
  };




  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            <input 
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Re-enter your password"
                />
            {confirmPasswordError && (
            <p style={{ color: 'red' }}>{confirmPasswordError}</p>
          )}

        <button type="submit" disabled={passwordError || confirmPasswordError}>
          Submit
        </button>
        </form>
    </div>
  )
}

export default Ex3