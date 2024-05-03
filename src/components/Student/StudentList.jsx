import { PencilIcon } from "@heroicons/react/24/solid";
import {

    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";


const TABLE_HEAD = ["Name", "Mobile(S)", "Gender", "Class", "Batch", "Institution", "M-Fee", "C-Fee", "Actions"];

const TABLE_ROWS = [
    {
        // img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        name: "Fatima",
        mobile: "017556466646",
        gender: "Female",
        classs: "Eight",
        batch: "S-2",
        institution: "grils college",
        expiry: "06/2026",
    },
    {
        // img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
        name: "Amazon",
        mobile: "012125695546",
        gender: "male",
        classs: "Nine",
        batch: "S-3",
        institution: "Boys college",
        expiry: "06/2026",
    },
    {
        // img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
        name: "Pinterest",
        mobile: "313131313",
        gender: "female",
        classs: "Ten",
        batch: "F-3",
        institution: "Govt. grils college",
        expiry: "06/2026",
    },
    {
        // img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
        name: "Google",
        mobile: "0166595",
        gender: "male",
        classs: "ten",
        batch: "F-5",
        institution: "boys college",
        expiry: "06/2026",
    },
    {
        // img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
        name: "netflix",
        mobile: "0125548625156",
        gender: "female",
        classs: "Nine",
        batch: "S-4",
        institution: "grils college",
        expiry: "06/2026",
    },
];

function StudentList() {
    return (
        <>
            <h1 className='bg-slate-800 w-fit text-white p-2 rounded-xl mb-4'>Student Mangement List</h1>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">

                        <div className="flex w-full shrink-0 gap-2 md:w-max">
                            <div className="w-full md:w-72 px-4">
                                <Input
                                    label="Search"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                />
                            </div>
                            <button className="uppercase border-2 bg-blue-400 p-1 rounded-2xl font-bold">New Student</button>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
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
                            {TABLE_ROWS.map(
                                (
                                    {

                                        name,
                                        mobile,
                                        gender,
                                        classs,
                                        batch,
                                        institution,

                                    },
                                    index,
                                ) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">

                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-semibold items-start"
                                                    >
                                                        {name}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {mobile}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {gender}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <Chip
                                                        size="sm"
                                                        variant="ghost"
                                                        value={classs}
                                                        color={
                                                            classs === "paid"
                                                                ? "green"
                                                                : classs === "pending"
                                                                    ? "amber"
                                                                    : "red"
                                                        }
                                                    />
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">

                                                    <div className="flex flex-col">

                                                        {batch}


                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        {institution}
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <div className="flex items-center gap-5">
                        <IconButton variant="outlined" size="sm">
                            1
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            2
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            3
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            ...
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            8
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            9
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            10
                        </IconButton>
                    </div>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default StudentList
