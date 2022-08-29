import * as React from 'react';
import { useState, useEffect } from 'react';
import { User } from '../models/common'

const UserCard: React.FC<{ user: User }>  = ({ user }) =>{
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.email}</div>
      <div>{user.first_name} {user.last_name}</div>
      <div><img src={`${user.avatar}`} width="25px" height="25px" alt="hello"/></div>
    </div>
  );
}

export default UserCard;