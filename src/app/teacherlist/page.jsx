import Link from "next/link";

const TeacherList = () => {
    const teachers = ['Nabiur', 'Siddique', 'Sumit-Saha', 'Jhanker-Mahbub'];
    return (
        <div>
            <h1>This is teachers list</h1>
            <ul>
                {
                    teachers.map((teacher, ind) => (
                        <li key={ind}>
                            <Link href={`/teacherlist/${teacher}`}>{teacher}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TeacherList;