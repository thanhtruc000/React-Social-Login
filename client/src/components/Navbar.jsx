import { Link } from 'react-router-dom';

const Navbar = ({user}) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <div className="navbar">
        <span className="logo">
          <Link className="link" to="/">ThanhTruc App</Link>
        </span>
        {user ? (
            <ul className="list">
              <li className="listItem">
                  {/* <img src="https://images.pexels.com/photos/9821879/pexels-photo-9821879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="avatar"/> */}
                  <img src={user.photos[0].value} alt="" className="avatar"/>
              </li>
              <li className="listItem">{user.displayName}</li>
              <li className="listItem"onClick={logout}>Logout</li>
            </ul>
        ) : (
            <Link className="link" to="login">
              Login
            </Link>
          )}
    </div>
  );
};

export default Navbar;
