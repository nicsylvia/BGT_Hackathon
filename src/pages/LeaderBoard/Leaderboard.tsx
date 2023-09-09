import { Link } from "react-router-dom";
import styled from "styled-components";

const LeaderBoard = () => {
  //   const user = UseAppSelector((state) => state.Admin);
  //   const getAdmin = useQuery({
  //     queryKey: ["singleAdmin"],
  //     queryFn: () => getOneAdmin(user?._id),
  //   });

  return (
    <Container>
      <Wrapper>
        <Title>LEADERBOARD</Title>
        <Table>
          <table>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Score</th>
              <th>Stars</th>
              <th>Rank</th>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
            <tr>
              <td>
                <Hold>
                  <Circle>OG</Circle>
                  <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>JavaScript</Text>
              </td>
              <td>50/100</td>
              <td>2</td>
              <td>
                <Stat>10</Stat>
              </td>
            </tr>
          </table>
        </Table>
        <BtnHold>
          <Link to="/">
            <Button>Visit Home</Button>
          </Link>
        </BtnHold>
      </Wrapper>
    </Container>
  );
};

export default LeaderBoard;

const Stat = styled.div`
  width: 70px;
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orangered;
  background-color: #fcbea8;
  /* background-color: #33333d; */
  border-radius: 50px;
  color: black;
`;
const Text = styled.div``;
const Hold = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  margin-left: 10px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #0d71fa;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: white;
`;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Table = styled.div`
  overflow-x: auto;
  font-size: 14px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    /* background-color: #f2f2f2; */
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
  }
  th {
    font-size: 13px;
    /* background-color: #0d71fa; */
    background-color: #fef0ef;

    color: black;
  }
`;

const BtnHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 35px;
  width: 150px;
  margin-top: 15px;
  font-family: poppins;
  border: 1px solid #0d71fa;
  /* color: #6d6d6e; */
  color: #0d71fa;

  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  /* margin-right: 10px; */
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
