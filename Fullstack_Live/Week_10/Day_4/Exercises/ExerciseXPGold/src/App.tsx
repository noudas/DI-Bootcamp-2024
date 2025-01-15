import './App.css'
import DataTable from './components/DataTable'
import Form from './components/Form'
import UserList from './components/UserList';
import { TableColumn } from './interface/types'

// Example data type
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Example data
const userData: User[] = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" },
  { id: 3, firstName: "Testimus", lastName: "Maximus", email: "jane@example.com" },
  { id: 4, firstName: "Abraham", lastName: "Lincon", email: "jane@example.com" },
];

// Example column definitions
const userColumns: TableColumn<User>[] = [
  { title: "First Name", key: "firstName", sortable: true },
  { title: "Last Name", key: "lastName", sortable: true },
  { title: "Email", key: "email" },
];


function App() {

  const handleSort = (key: keyof User) => {
    console.log(`Sorting by: ${key}`);
  };

  const handleSelect = (row: User) => {
    console.log("Selected row:", row);
  };

  return (
    <>
    <Form/>
      <DataTable
        data={userData}
        columns={userColumns}
        onSort={handleSort}
        onSelect={handleSelect}
      />
      <UserList/>
    </>
  )
}

export default App
