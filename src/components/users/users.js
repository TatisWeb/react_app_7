import React from "react";
import styles from "./styleUsers.css";
import * as axios from 'axios';



let Users = props => {

    let getUsers = () => {

        if (props.users.length === 0) {
          axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                 props.setUsers(response.data.items);
             });
     }

        
}

    
    if (props.users.length === 0 ){
      props.setUsers([
           {
id: 1,
photoUrl: "https://i.ibb.co/zf1h4n9/20201130-232611.jpg",
followed: "true",
fullname: "Elena Ivanova",
status: "i like this app",
location: { Country: "Russian", city: "Moscow" }
},
{
id: 2,
photoUrl: "https://i.ibb.co/zf1h4n9/20201130-232611.jpg",
followed: "false",
fullname: "Ilona Tatis",
status: "i want a boy",
location: { country: "Ukraine", city: "Kiev" }
},
{
id: 3,
photoUrl: "https://i.ibb.co/BcYwTTS/20201130-232652.jpg",
followed: "true",
fullname: "Sergey Tarasenko",
status: "i am developer by React",
location: { country: "Russian", city: "Moscow" }
},
{
id: 4,
photoUrl: "https://i.ibb.co/zf1h4n9/20201130-232611.jpg",
folowed: "true",
fullname: "Anton Loboda",
status: "i happy man",
location: { country: "Ukraine", city: "Dnepr" }
}
]);
     
     }
       
        return ( < div > {
                props.users.map(u => ( < div key = {
                        u.id
                    } > < div className = "users-content" > < span > < div > < img className = "img-users"
                    src = {
                        u.photoUrl
                    }
                    />
            </div > < div > {
                        u.followed ? < button onClick = {
                            () => {
                                props.unfollow(u.id)
                            }
                        } > follow < /button>
              : <button onClick={ () => {props.follow(u.id)}}> unfollow</button >
                    } < /div>
          </span >

                    < span className = "users-block" > < span > < div > < p className = "wrapper" > Name: < /p> {u.name}</div > < div > Status: {
                        u.status
                    } < /div>
            </span > < span > < div > < p className = "wrapper" > City: < /p> {u.location.city}</div > < div > < p className = "wrapper" > Country: < /p> {u.location.country}</div > < /span>
          </span > < /div>
       </div >
                ))
            } < /div>
  );
};


export default Users;