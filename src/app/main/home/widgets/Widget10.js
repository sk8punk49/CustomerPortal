import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { memo } from "react";
import { Link } from "react-router-dom";

function Widget10(props) {
  return (
    <Paper className="w-full rounded-20 shadow overflow-hidden">
      <div className="flex items-center justify-between p-20 h-64">
        <Typography className="text-16 font-medium">
          {props.widget.title}
        </Typography>
      </div>
      <div className="table-responsive">
        <Table className="w-full min-w-full">
          <TableHead>
            <TableRow>
              {props.widget.table.columns.map((column) => (
                <TableCell key={column.id}>
                  {column.id == "total_amount" ? (
                    <Typography
                      color="textSecondary"
                      className="text-right font-semibold whitespace-nowrap"
                    >
                      {column.title}
                    </Typography>
                  ) : (
                    <Typography
                      color="textSecondary"
                      className="font-semibold whitespace-nowrap"
                    >
                      {column.title}
                    </Typography>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.widget.table.rows.map((row) => (
              <TableRow key={row.id} className="h-64">
                {row.cells.map((cell) => {
                  switch (cell.id) {
                    case "invoice_number": {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Link
                            style={{ color: "#008fc5" }}
                            to="/apps/e-commerce/orders/1"
                          >
                            {cell.value}
                          </Link>
                        </TableCell>
                      );
                    }
                    case "total_amount": {
                      return (
                        <TableCell
                          key={cell.id}
                          align="right"
                          component="th"
                          scope="row"
                        >
                          <Typography className={cell.classes}>
                            {cell.value}
                          </Typography>
                        </TableCell>
                      );
                    }
                    default: {
                      return (
                        <TableCell key={cell.id} component="th" scope="row">
                          <Typography className={cell.classes}>
                            {cell.value}
                          </Typography>
                        </TableCell>
                      );
                    }
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

export default memo(Widget10);
