import Link from "next/link";

const StudentList = () => {
    const students = ['Nabil', 'Zisan', 'Utsab', 'Rafi', 'Rohit', 'Jordan'];
    return (
        <div>
            <ul>
                {
                    students.map((student, ind) => (
                        <li key={ind}>
                            <Link href={`studentlist/${student}`}>{student}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default StudentList;