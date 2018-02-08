import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";

import {
    Dashboard, Person, ContentPaste
} from 'material-ui-icons';

const appRoutes = [
    { path: "/home", sidebarName: "Dashboard", navbarName: "Admin Dashboard", icon: Dashboard, component: DashboardPage },
    { path: "/user", sidebarName: "Add User", navbarName: "Add User", icon: Person, component: UserProfile },
    { path: "/table", sidebarName: "Manage User", navbarName: "Manage User", icon: ContentPaste, component: TableList },
    { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default appRoutes;
