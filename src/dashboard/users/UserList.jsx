import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const UserList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='username' />
                <EmailField source='email' />
                <TextField source='address.street' />
                <TextField source='phone' />
            </Datagrid>
        </List>
    );
}

export default UserList;
