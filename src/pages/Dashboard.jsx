// import { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./Dashboard.module.css"; // Import CSS module

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/users")
//       .then((res) => setUsers(res.data.users))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = async (id) => {
//     await axios.delete(`https://dummyjson.com/users/${id}`);
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div className={styles.container}>
//       <h2>User Dashboard</h2>
//       <ul className={styles.userList}>
//         {users.map((user) => (
//           <li key={user.id} className={styles.userCard}>
//             <img src={user.image} alt={user.firstName} width="80" />
//             <p>
//               {user.firstName} {user.lastName}
//             </p>
//             <button onClick={() => handleDelete(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css"; // Import CSS module

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "" });
  const [editUser, setEditUser] = useState(null);

  // Fetch users (READ)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  // Add new user (CREATE)
  const handleAddUser = async () => {
    if (!newUser.firstName || !newUser.lastName) {
      alert("Please enter first and last name");
      return;
    }

    try {
      const response = await axios.post("https://dummyjson.com/users/add", {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      });

      setUsers([...users, { ...response.data, id: users.length + 1 }]);
      setNewUser({ firstName: "", lastName: "" });
    } catch (error) {
      console.log("Error adding user:", error);
    }
  };

  // Update user (UPDATE)
  const handleUpdateUser = async () => {
    if (!editUser || !editUser.firstName || !editUser.lastName) {
      alert("Please enter updated first and last name");
      return;
    }

    try {
      await axios.put(`https://dummyjson.com/users/${editUser.id}`, editUser);

      setUsers(
        users.map((user) =>
          user.id === editUser.id ? { ...user, ...editUser } : user
        )
      );

      setEditUser(null);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  // Delete user (DELETE)
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>User Dashboard</h2>

      {/* Add New User */}
      <div className={styles.addUserForm}>
        <input
          type="text"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* User List */}
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userCard}>
            <img src={user.image} alt={user.firstName} width="80" />
            {editUser && editUser.id === user.id ? (
              <>
                <input
                  type="text"
                  value={editUser.firstName}
                  onChange={(e) =>
                    setEditUser({ ...editUser, firstName: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editUser.lastName}
                  onChange={(e) =>
                    setEditUser({ ...editUser, lastName: e.target.value })
                  }
                />
                <button onClick={handleUpdateUser}>Save</button>
                <button onClick={() => setEditUser(null)}>Cancel</button>
              </>
            ) : (
              <>
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
