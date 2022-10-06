import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Authentication & Authorization</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Groups     <span style={{ float: 'right' }}>➕   </span> </td>
                    </tr>
                </tbody>
            </Table>



            {/* table 2******************************************** */}

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Consumer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Connection type <span style={{ float: 'right' }}>➕   </span></td>

                    </tr>
                    <tr>

                        <Nav.Link as={NavLink} to="/admin/block_d">Block <span style={{ float: 'right' }}>➕   </span></Nav.Link>
                    </tr>

                    <tr>
                        <Nav.Link as={NavLink} to="/admin/district_d">District <span style={{ float: 'right' }}>➕   </span></Nav.Link>


                    </tr>

                    <tr>
                        <Nav.Link as={NavLink} to="/admin/panchayat_d">Panchayat <span style={{ float: 'right' }}>➕   </span></Nav.Link>

                    </tr>


                
                <tr>
                    <td>Temp Applicants<span style={{ float: 'right' }}>➕   </span></td>

                </tr>
                <tr>
                    <td>Tension type<span style={{ float: 'right' }}>➕   </span></td>

                </tr>
                <tr>
                    <td>Users<span style={{ float: 'right' }}>➕   </span></td>

                </tr>
                <tr>
                    <td>Villages<span style={{ float: 'right' }}>➕   </span></td>

                </tr>
            </tbody>

        </Table>

        <Table bordered hover>
        <thead>
            <tr>
                <th>Select Discom Office</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <Nav.Link as={NavLink} to="/admin/division_d">Division <span style={{ float: 'right' }}>➕   </span></Nav.Link>

            </tr>
            <tr>
                <Nav.Link as={NavLink} to="/admin/sub_division_d">Sub Division <span style={{ float: 'right' }}>➕   </span></Nav.Link>

            </tr>
            <tr>
                <Nav.Link as={NavLink} to="/admin/section_d">Section <span style={{ float: 'right' }}>➕   </span></Nav.Link>

            </tr>

        </tbody>

    </Table>
  
        </>
    )
}
