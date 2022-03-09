import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Input } from "@mui/material";


import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Alert from '@mui/material/Alert';

export default function CellEditControlGrid() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <Alert severity="info" style={{ marginBottom: 8 }}>
        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
      </Alert>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
        />
      </div>
    </div>
  );
}

const columns = [
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last Name', width: 150, editable: true },
    { field: 'role', headerName: 'Role', width:150, editable: true },
    { field: 'email', headerName: 'Email', type: 'email', width:250, editable: true },
    
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      width: 150,
      editable: true,
    },
    { field: 'status', headerName: 'Status', width:150, editable: true },
    { field: 'note', headerName: 'Note', width:150, editable: true },
    { field: 'phoneNumber', headerName: 'Phone Number', type: 'phoneNumber', width:150, editable: true },
  
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      width: 220,
      editable: true,
    },
    { field: 'filetype', headerName: 'FileType', width:150, editable: true },
  ];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
