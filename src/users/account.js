import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link,useParams } from "react-router-dom";
function Account() {
    const { id } = useParams();
  const [account, setAccount] = useState(null);

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    // console.log(account)
    setAccount(account);
  };

  const fetchOtherAccount = async (id) => {
    const account = await client.findUserById(id);
    // console.log(account)
    setAccount(account);
  };


  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };
  
  useEffect(() => {
    if(id===undefined){
      fetchAccount();
    }
    else{
      fetchOtherAccount(id);
    }
   
  }, [id]);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
              <br />
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
                <br />
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
                <br />
          <input type="date" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
                <br />
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
                <br />
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br />
          <button onClick={save} style={{ width: '30%' }}>
            Save
          </button>
          <br />
          <Link to="/project/admin/users" className="btn btn-warning" style={{ width: '30%' }}>
            Users
          </Link>
          <br />
  <button onClick={signout} style={{ width: '30%' }}>
    Signout
  </button>

        </div>
      )}
    </div>
  );
}
export default Account;

