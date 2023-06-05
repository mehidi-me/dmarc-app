import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useStyles from './papperStyle-jss';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'domain',
    headerName: 'Domain',
    width: 150,
    editable: true,
  },
  {
    field: 'percentage',
    headerName: 'Percentage',
    width: 150,
    editable: true,
  },
  {
    field: 'curPolicy',
    headerName: 'Cur. Policy',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'compliant',
    headerName: 'Compliant',
    sortable: false,
    width: 110,
  },
  {
    field: 'nonCompliant',
    headerName: 'Non-complaint',
    sortable: false,
    width: 110,
  },
  {
    field: 'spf',
    headerName: 'SPF',
    sortable: false,
    width: 110,
  },
  {
    field: 'dkim',
    headerName: 'DKIM',
    sortable: false,
    width: 110,
  },
  {
    field: 'accepted',
    headerName: 'Accepted',
    sortable: false,
    width: 110,
  },
  {
    field: 'quarantine',
    headerName: 'Quarantine',
    sortable: false,
    width: 110,
  },
  {
    field: 'rejected',
    headerName: 'Rejected',
    sortable: false,
    width: 110,
  },
];

const rows = [
  { id: 1, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 2, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 3, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 4, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 5, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 6, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 7, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 8, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 9, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 10, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 11, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 12, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 13, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 14, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 15, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 16, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 17, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },
  { id: 18, domain: 'TradeCode.com', percentage: 'nxdomain', curPolicy: 'Yes', compliant:'23', nonCompliant:'43',spf:'Softfall',dkim:'None', accepted:'None', quarantine:'None', rejected:'None' },

];

export default function UserTable() {
    const {classes,theme} = useStyles();
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
      sx={{  
        '& .MuiDataGrid-cellContent': {
        color : theme.palette.mode === "dark" ? '#fff' : '#333',
      },
        '& .MuiDataGrid-columnHeaderTitle': {
        color : theme.palette.mode === "dark" ? '#fff' : '#333',
      }
    }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}