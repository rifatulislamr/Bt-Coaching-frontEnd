import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Mobile", "Gender", "Class", "Batch", "Institution", "M.Fee", "C.Fee", "Actions"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        mobile: "Manager",
        gender: "Male",
        class: "ten",

    },
    {
        name: "Alexa Liras",
        mobile: "Developer",
        gender: "Male",
        class: "ten",
    },
    {
        name: "Laurent Perrier",
        mobile: "Executive",
        gender: "Female",
        class: "ten",
    },
    {
        name: "Michael Levi",
        mobile: "Developer",
        gender: "Female",
        class: "ten",
    },
    {
        name: "Richard Gran",
        mobile: "Manager",
        gender: "Male",
        class: "ten",
    },
];

function StudentList() {
    return (
        <div className='inline-flex'>
            <h1 className='mb-6 text-3xl'>Manage Students</h1>
            {/* <h1 className='bg-slate-800 w-fit text-white p-2 rounded-xl'>Student List</h1> */}
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, mobile, gender, }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {mobile}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {gender}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            Edit
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <div> <button className='bg-red-600 p-2 rounded-3xl'>New Student</button></div>
        </div>
    )
}

export default StudentList
