import DashboardPage from "views/Dashboard/Dashboard.jsx";
import {AddUser} from "components";
import TableList from "views/TableList/TableList.jsx";
import {Authorization} from "utils"

import {
    Dashboard, Person, ContentPaste
} from 'material-ui-icons';
const ROLE_ADMIN = ['ROLE_ADMIN'];
const ROLE_USER = ['ROLE_USER'];
const Admin = Authorization(ROLE_ADMIN);
const User = Authorization(ROLE_USER);

const adminRoutes = [
    { path: "/home", sidebarName: "Dashboard", navbarName: "Admin Dashboard", icon: Dashboard, component: DashboardPage },
    { path: "/User", sidebarName: "Add User", navbarName: "Add User", icon: Person, component: Admin(AddUser) },
    { path: "/table", sidebarName: "Manage User", navbarName: "Manage User", icon: ContentPaste, component:Admin(TableList)  },
    { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

const userRoutes = [
    { path: "/home", sidebarName: "Dashboard", navbarName: "Admin Dashboard", icon: Dashboard, component: DashboardPage },
    { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

const appRoutes = (() => {
    if ( ROLE_ADMIN.includes(localStorage.getItem("roles"))){
        return adminRoutes;
    }else{
        return userRoutes;
    }

})();

export default appRoutes;
