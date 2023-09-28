import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import { dataPasien } from '../data/mockData';
import { useTheme } from '@mui/material';
import { tokens } from '@/app/theme';
import { dataPasien } from './dataPasien';

const columns = [
  { 
    id: 'name',
    label: 'Nama',
    minWidth: 170
  },
  { 
    id: 'noTelp', 
    label: 'No.Telp', 
    minWidth: 100,
  },
  {
    id: 'alamat',
    label: 'Alamat',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'tanggal',
    label: 'Tanggal',
    minWidth: 170,
    align: 'center',
  },
];

// function createData(name, telp, alamat, tanggal, keterangan) {
//   return { name, telp, alamat, tanggal, keterangan };
// }

const rows = dataPasien

// const rows = [
//   createData('agus', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('reno', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('sari', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('galang', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('velop', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('gulio', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('huyilop', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('gerio', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('jilpoilo', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('ffekulipo', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('huop', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('ertiyupyulio', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('ujipoli', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('huliopolit', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('feropildo', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('agus', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('reno', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('sari', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('galang', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('velop', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('gulio', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('huyilop', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('gerio', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('jilpoilo', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('ffekulipo', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('huop', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('ertiyupyulio', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('ujipoli', '085465986325', 'semarang','23-02-2023', 'sakit'),
//   createData('huliopolit', '085727263498', 'semarang','23-02-2023', 'sakit'),
//   createData('feropildo', '085465986325', 'semarang','23-02-2023', 'sakit'),
// ];

export default function TablePasien() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{overflow: 'hidden',marginTop:"1rem", marginRight:"2rem" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: colors.primary[400] }}
                  sx={{fontSize: '1.2rem', fontWeight: "bold"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{fontSize: '1rem'}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}