import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { Link } from "react-router-dom";

type User = {
    id: number
    name: string
    email: string
}

type Props = {
    users: User[]
}

const UsersList = ({users}: Props) => (
  <div>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}  component={Link} to={`/user/${user.id}`}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </div>
   
)

export {UsersList};
