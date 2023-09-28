import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { tokens } from '@/app/theme';

const columns = [
    { 
        id: 'tanggal', 
        label: 'Tanggal', 
        minWidth: 150,
      },
  { 
    id: 'name',
    label: 'Nama',
    minWidth: 170
  },
  {
    id: 'order',
    label: 'Order',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'terapis',
    label: 'Terapis',
    minWidth: 170,
    align: 'center',
  },
];

function createData(tanggal, name, order, terapis) {
  return { tanggal, name, order, terapis };
}

const rows = [
  createData('24-02-2023', 'aziz', 'pijat','robert'),
  createData('24-02-2023', 'reno', 'pijat','robert'),
  createData('24-02-2023', 'poli', 'pijat','robert'),
  createData('24-02-2023', 'ical', 'pijat','robert'),
  createData('24-02-2023', 'orio', 'pijat','robert'),
  createData('24-02-2023', 'regads', 'pijat','robert'),
  createData('24-02-2023', 'reliop', 'pijat','robert'),
  createData('24-02-2023', 'halio', 'pijat','robert'),
  createData('24-02-2023', 'regina', 'pijat','robert'),
  createData('24-02-2023', 'rafalo', 'pijat','robert'),
  createData('24-02-2023', 'palako', 'pijat','robert'),
  createData('24-02-2023', 'polio', 'pijat','robert'),
  createData('24-02-2023', 'nigger', 'pijat','robert'),
  createData('24-02-2023', 'retry', 'pijat','robert'),
  createData('24-02-2023', 'ropalas', 'pijat','robert'),
  createData('24-02-2023', 'aziz', 'pijat','robert'),
  createData('24-02-2023', 'reno', 'pijat','robert'),
  createData('24-02-2023', 'poli', 'pijat','robert'),
  createData('24-02-2023', 'ical', 'pijat','robert'),
  createData('24-02-2023', 'orio', 'pijat','robert'),
  createData('24-02-2023', 'regads', 'pijat','robert'),
  createData('24-02-2023', 'reliop', 'pijat','robert'),
  createData('24-02-2023', 'halio', 'pijat','robert'),
  createData('24-02-2023', 'regina', 'pijat','robert'),
  createData('24-02-2023', 'rafalo', 'pijat','robert'),
  createData('24-02-2023', 'palako', 'pijat','robert'),
  createData('24-02-2023', 'polio', 'pijat','robert'),
  createData('24-02-2023', 'nigger', 'pijat','robert'),
  createData('24-02-2023', 'retry', 'pijat','robert'),
  createData('24-02-2023', 'ropalas', 'pijat','robert'),
];

export default function TableAppointment() {
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
    <Paper sx={{  overflow: 'hidden',marginTop:"1rem", marginRight:"2rem"}} >
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