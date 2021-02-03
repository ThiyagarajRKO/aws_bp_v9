/**
 * @author Kameshwaran Murugan
 * @email kamesh@qdmplatforms.com
 * @create date 2021-01-09
 * @modify date 2021-02-03
 * @desc Collection of constants
 */
import React from 'react';
import { Routes } from '../router/routes';
// import ListAltIcon from '@material-ui/icons/ListAlt';
import ViewStreamIcon from '@material-ui/icons/ViewStream';


/**
 * Object with role as key and value, which is used for 
 * comparison of role in different place.
 */
export const UserRoles = {
    role: "role"
};

/**
 * Object which has the proper name of all the role
 * used in the application.
 */
export let UserRolesName = {
    "role": "Role"
};

/**
 * Object which has the different themes used in 
 * the application.
 */
export let Themes = {
    default: "default",
    dark: "dark",
};

/**
 * Object which has the different props for the Alert Component (/src/component/alert) 
 * which is used via AlertContext (/src/contexts) and provided at /src/App.alert.js.
 */
export let AlertProps = {
    vertical: {
        top: "top",
        bottom: "bottom",
    },
    horizontal: {
        left: "left",
        right: "right",
        center: "center",
    },
    severity: {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info",
    },
};

/**
 * Object which has the different props for the Drawer Component (/src/App.drawer.js) 
 * which is used via DrawerContext (/src/contexts) and provided at /src/App.drawer.js.
 */
export const DrawerProps = {
    direction: {
        top: "top",
        bottom: "bottom",
        left: "left",
        right: "right",
    },
    variant: {
        permanent: "permanent",
        persistent: "persistent",
        temporary: "temporary",
    },
};

/**
 * Object has the key and value pair of all the keys which 
 * are used to store some values in the local storage.
 */
export let LocalStorageKeys = {
    authToken: "auth_token",
    version: "version"
};

/**
 * Object has the key and value pair of all the HTTP method
 * used for an network call.
 */
export let NetWorkCallMethods = {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
    update: "UPDATE",
};


export const NavBarArr = [
    {
        name: "Forms",
        link: Routes.forms,
        icon: <ViewStreamIcon />
    }
]
