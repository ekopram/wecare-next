import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { 
    id: 'name',
    label: 'Nama',
    minWidth: 170
  },
  { 
    id: 'order', 
    label: 'Order', 
    minWidth: 100,
  },
  {
    id: 'nominal',
    label: 'Nominal',
    minWidth: 170,
    align: 'center',
  },
];

function createData(name, order, nominal) {
  return { name, order, nominal };
}

const rows = [
  createData('sari', 'pijat','200.000'),
  createData('api', 'pijat','150.000'),
  createData('suwarno', 'pijat','200.000'),
  createData('gulio', 'pijat','200.000'),
  createData('velop', 'pijat','200.000'),
  createData('adira', 'pijat','150.000'),
  createData('renata', 'pijat','200.000'),
  createData('gerio', 'pijat','200.000'),
  createData('jilpoilo', 'pijat','200.000'),
  createData('fernando', 'pijat','150.000'),
  createData('lapoli', 'pijat','200.000'),
  createData('napoli', 'pijat','200.000'),
  createData('sakur', 'pijat','200.000'),
  createData('lupos', 'pijat','200.000'),
  createData('tupac', 'pijat','200.000'),
  createData('sari', 'pijat','200.000'),
  createData('api', 'pijat','150.000'),
  createData('suwarno', 'pijat','200.000'),
  createData('gulio', 'pijat','200.000'),
  createData('velop', 'pijat','200.000'),
  createData('adira', 'pijat','150.000'),
  createData('renata', 'pijat','200.000'),
  createData('gerio', 'pijat','200.000'),
  createData('jilpoilo', 'pijat','200.000'),
  createData('fernando', 'pijat','150.000'),
  createData('lapoli', 'pijat','200.000'),
  createData('napoli', 'pijat','200.000'),
  createData('sakur', 'pijat','200.000'),
  createData('lupos', 'pijat','200.000'),
  createData('tupac', 'pijat','200.000'),
];

export default function RecentTransaction() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{fontSize: '1.2rem'}}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.telp}>
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