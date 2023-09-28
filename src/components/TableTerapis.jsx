import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material';
import { tokens } from '@/app/theme';

const columns = [
  { 
    id: 'name',
    label: 'Nama',
    minWidth: 170
  },
  { 
    id: 'telp', 
    label: 'No.Telp', 
    minWidth: 100,
  },
  {
    id: 'keahlian',
    label: 'Keahlian',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'center',
  },
];

function createData(name, telp, keahlian, status) {
  return { name, telp, keahlian, status };
}

const rows = [
  createData('rudi', '085727263498', 'pijat','tersedia'),
  createData('hadi', '085465986325', 'pijat','absen'),
  createData('suwarno', '085727263498', 'pijat','tersedia'),
  createData('galang', '085727263498', 'pijat','tersedia'),
  createData('velop', '085727263498', 'pijat','tersedia'),
  createData('gulio', '085465986325', 'pijat','absen'),
  createData('rara', '085727263498', 'pijat','tersedia'),
  createData('gerio', '085465986325', 'pijat','tersedia'),
  createData('jilpoilo', '085727263498', 'pijat','tersedia'),
  createData('fernando', '085465986325', 'pijat','absen'),
  createData('huoupolp', '085727263498', 'pijat','tersedia'),
  createData('friday', '085727263498', 'pijat','tersedia'),
  createData('napoli', '085465986325', 'pijat','tersedia'),
  createData('lupos', '085727263498', 'pijat','tersedia'),
  createData('tupac', '085465986325', 'pijat','tersedia'),
  createData('rudi', '085727263498', 'pijat','tersedia'),
  createData('hadi', '085465986325', 'pijat','absen'),
  createData('suwarno', '085727263498', 'pijat','tersedia'),
  createData('galang', '085727263498', 'pijat','tersedia'),
  createData('velop', '085727263498', 'pijat','tersedia'),
  createData('gulio', '085465986325', 'pijat','absen'),
  createData('rara', '085727263498', 'pijat','tersedia'),
  createData('gerio', '085465986325', 'pijat','tersedia'),
  createData('jilpoilo', '085727263498', 'pijat','tersedia'),
  createData('fernando', '085465986325', 'pijat','absen'),
  createData('huoupolp', '085727263498', 'pijat','tersedia'),
  createData('friday', '085727263498', 'pijat','tersedia'),
  createData('napoli', '085465986325', 'pijat','tersedia'),
  createData('lupos', '085727263498', 'pijat','tersedia'),
  createData('tupac', '085465986325', 'pijat','tersedia'),
];

export default function TableTerapis() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: 'hidden',marginTop:"1rem", marginRight:"2rem" }}>
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
        rowsPerPageOptions={[10, 25, 100]}
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