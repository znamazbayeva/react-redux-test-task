import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useSelector } from "../hooks/useTypedSelector";
import { User } from "../models/common";

const NotFound: React.FC = () =>{
  const [currentUser, setCurrentUser] = useState<User>();
  const { data } = useSelector((state) => state.users);
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = data.filter(user => user.id == userId);
    console.log(user[0]);
    setCurrentUser(user[0]);
  }, []);
  return (
    <div>
      <Header />
       {
        currentUser ?       
        (<table>
          <tbody>
            <tr><th>{currentUser.id}</th></tr>
            <tr><th>{currentUser.first_name}</th></tr>
            <tr><th>{currentUser.last_name}</th></tr>
            <tr><th>{currentUser.email}</th></tr>
            <tr><th><img src={currentUser.avatar} width="120px" height="120px" alt={currentUser.first_name}/></th></tr>
          </tbody>
        </table>
      ) : <div>No current user</div>
       }

    </div>
  )
}

export default NotFound;