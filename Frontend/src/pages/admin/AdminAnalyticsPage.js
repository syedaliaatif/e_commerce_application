import { Col, Container, Form, Row } from "react-bootstrap"
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const AdminAnalyticsPage = () => {
    return (
        <Container width="100%" height="100%">
            <Row >
                <Col md={2}>
                    <AdminLinksComponent />
                </Col>
                <Col md={10} className="mt-5">
                    <h3>Christmas Cumulative Revenue 24-12-2022 vs 27-12-2022</h3>
                    <Form.Group>

                        <Form.Label>Select first date to compare</Form.Label>
                        <Form.Select>
                            <option></option>
                        </Form.Select>

                    </Form.Group>

                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="amt" stroke="red" />
                    </LineChart>
                </Col>
            </Row>
        </Container>
    )
};
export default AdminAnalyticsPage; 