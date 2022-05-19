import React from 'react'
import { motion } from 'framer-motion'
import { Paper, CardContent, Typography, Button, Table, TableBody, TableCell, TableRow, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom';

function LandingPage() {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const tradeshowEventDetails = {
        title: "32th Annual Lordco Tradeshow",
        startTime: "April 1 9:00AM (PT)",
        endTime: "April 30 6:00PM (PT)",
        location: "Pacific National Exhibition"
    }

    return (
        <div>
            <motion.div
                className="lg:flex w-full sm:flex-col lg:flex-row"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            >
                <motion.div variants={item} className="flex w-full mb-12  lg:mr-12">
                    <Paper className="w-full rounded-20 shadow">

                        <CardContent>

                            <Typography variant="h5">
                                Event Details
                            </Typography>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography className="font-medium">{tradeshowEventDetails.title}</Typography>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Starts:
                                        </TableCell>
                                        <TableCell>
                                            {tradeshowEventDetails.startTime}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Ends:
                                        </TableCell>
                                        <TableCell>
                                            {tradeshowEventDetails.endTime}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            Location:
                                        </TableCell>
                                        <TableCell>
                                            {tradeshowEventDetails.location}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </CardContent>

                    </Paper>
                </motion.div>
                <motion.div variants={item} className="lg:flex sm:flex-col">
                    <Paper className="w-full rounded-20 shadow">
                        <CardContent>
                            <Typography className="mb-4" variant="h5">Best Deals of the Year</Typography>
                            <div className="flex">
                                <img className="w-48 mr-12 hidden md:flex" src="/assets/images/clip-art/ts_icon_1.png" />
                                <span className="mt-4">Save big on parts, tools, equipment, and more from leading manufacturers.</span>
                            </div>
                            <Button
                                className="normal-case mt-12"
                                variant="outlined"
                                component="a"
                                href="https://issuu.com/lordcoautoparts/docs/01-ts2022_catalogue?fr=sNWRhMTQ3OTcyMTE&utm_source=microsite&utm_id=2022ts"
                                target="_blank"
                                role="button"
                            >
                                <span className="mx-4">View Catalogue</span>
                            </Button>

                        </CardContent>

                    </Paper>
                    <Paper className="w-full rounded-20 shadow mt-16">
                        <CardContent>
                            <Typography className="mb-4" variant="h5">Product Displays & Demos</Typography>
                            <div className="flex">
                                <img className="w-48 mr-12 hidden md:flex" src="/assets/images/clip-art/ts_icon_2.png" />
                                <span className="mt-4">Learn about new products, direct from the manufacturers, from April 4-5.</span>
                            </div>
                            <Button
                                className="normal-case mt-12"
                                variant="outlined"
                                component="a"
                                href="https://www.lordco.com/tradeshow/sites/default/files/2022-03/TS2022%20MAP%20Directory%2003312022.pdf"
                                target="_blank"
                                role="button"
                            >
                                <span className="mx-4">View Exhibitors</span>
                            </Button>

                        </CardContent>

                    </Paper>
                    <Paper className="w-full rounded-20 shadow mt-16">
                        <CardContent>
                            <Typography className="mb-4" variant="h5">Red Sheet Specials</Typography>
                            <div className="flex">
                                <img style={{ width: "85px", height: "48px" }} className="w-48 mr-12 hidden md:flex" src="/assets/images/clip-art/ts_icon_3.png" />
                                <span className="mt-4">Take advantage of Red Sheet Specials, the best prices on our most popular items.</span>
                            </div>
                            <Button
                                className="normal-case mt-12"
                                variant="outlined"
                                component="a"
                                href="https://www.lordco.com/tradeshow/sites/default/files/2022-03/TS2022%20Red%20Sheet%20Specials-non%20priced.pdf"
                                target="_blank"
                                role="button"
                            >
                                <span className="mx-4">View Specials</span>
                            </Button>

                        </CardContent>

                    </Paper>
                </motion.div>

            </motion.div>

        </div>

    )
}

export default LandingPage