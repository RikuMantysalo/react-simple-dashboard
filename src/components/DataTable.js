import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

export default function DataTable(props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Conversation count</TableCell>
            <TableCell>Missed chat count</TableCell>
            <TableCell>Visitors with conversation count</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(item => (
            <TableRow>
              <TableCell>{item.conversation_count}</TableCell>
              <TableCell>{item.missed_chat_count}</TableCell>
              <TableCell>{item.visitors_with_conversation_count}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={1}
              rowsPerPage={5}
              page={1}
              SelectProps={{
                native: true
              }}
              onChangePage={() => console.log('page')}
              onChangeRowsPerPage={() => console.log('page')}
              ActionsComponent={() => <div>lol</div>}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}
