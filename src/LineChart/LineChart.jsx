import { LineChart as Lchart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const LineChart = () => {

    const subMarks = [
        {
            "student_id": 1,
            "math_marks": 85,
            "english_marks": 78,
            "art_of_living_marks": 90
        },
        {
            "student_id": 2,
            "math_marks": 75,
            "english_marks": 82,
            "art_of_living_marks": 88
        },
        {
            "student_id": 3,
            "math_marks": 90,
            "english_marks": 85,
            "art_of_living_marks": 92
        },
        {
            "student_id": 4,
            "math_marks": 70,
            "english_marks": 68,
            "art_of_living_marks": 75
        },
        {
            "student_id": 5,
            "math_marks": 78,
            "english_marks": 80,
            "art_of_living_marks": 85
        },
        {
            "student_id": 6,
            "math_marks": 82,
            "english_marks": 88,
            "art_of_living_marks": 92
        },
        {
            "student_id": 7,
            "math_marks": 65,
            "english_marks": 70,
            "art_of_living_marks": 78
        },
        {
            "student_id": 8,
            "math_marks": 88,
            "english_marks": 92,
            "art_of_living_marks": 95
        },
        {
            "student_id": 9,
            "math_marks": 72,
            "english_marks": 76,
            "art_of_living_marks": 80
        },
        {
            "student_id": 10,
            "math_marks": 84,
            "english_marks": 90,
            "art_of_living_marks": 88
        }
    ]

    return (
        <div>
            <Lchart height={500} width={600} data={subMarks}>
                <Line type="monotone" stroke="red" dataKey={"math_marks"}></Line>
                <Line type="monotone" stroke="yellow" dataKey={"english_marks"}></Line>
                <Line type="monotone" stroke="blue" dataKey={"art_of_living_marks"}></Line>
                <CartesianGrid stroke="lightBlue" />
                <XAxis dataKey="subMarks" />
                <YAxis/>
            </Lchart>
        </div>
    );
};

export default LineChart;