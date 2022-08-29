import {useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";
import UserCard from "../components/UserCard";
import Header from "../components/Header";

// Home Page shows the list of users 

const Home: React.FC = () => {
  const { getUsersList } = useActions();
  const { loading, data, error } = useSelector((state) => state.users);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!data.length) {
      getUsersList();
    }
  }, []);
  return (
    <div>
      <Header />
      { !token && <div>You need to be authenticated</div>}
      { error && <div>{error}</div>}
      { loading && <div>Loading....</div>}

      { (!error && !loading && data && token) ?
        data.map( (user: any) => {
          return (<div key={user.id}><UserCard user={user} /></div>)
        })  : "Loading"
      }
    </div>
  )
}

export default Home;