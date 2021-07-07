import React from 'react'
import Avatar from 'react-avatar';
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

function ProjectTable() {
    return (
        <Table striped hover className="project__table">
            <thead>
                <tr>
                    <th>SUBJECT</th>
                    <th>PROBLEM STATEMENT</th>
                    <th>DELIVERED IN</th>
                    <th>DELIVERY DATE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Avatar
                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                            name="Finance" round={true} size={32}
                        />
                        <span className='align-middle font-weight-bold pl-2'>Finance</span>
                    </td>
                    <td>
                        Rhoncus diam sit amet magna
                        tincidunt id a turpis.
                    </td>
                    <td>Mar 23, 2021</td>
                    <td>Mar 30, 2021</td>
                    <td>
                        <Badge pill variant="success" color="success" >
                            80%
                        </Badge>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Avatar
                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                            name="Finance" round={true} size={32}
                        />
                        <span className='align-middle font-weight-bold pl-2'>Finance</span>
                    </td>
                    <td>
                        Rhoncus diam sit amet magna
                        tincidunt id a turpis.
                    </td>
                    <td>Mar 23, 2021</td>
                    <td>Mar 30, 2021</td>
                    <td>
                        <Badge pill variant="success" color="success" >
                            80%
                        </Badge>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Avatar
                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                            name="Finance" round={true} size={32}
                        />
                        <span className='align-middle font-weight-bold pl-2'>Finance</span>
                    </td>
                    <td>
                        Rhoncus diam sit amet magna
                        tincidunt id a turpis.
                    </td>
                    <td>Mar 23, 2021</td>
                    <td>Mar 30, 2021</td>
                    <td>
                        <Badge pill variant="success" color="success" >
                            80%
                        </Badge>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Avatar
                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                            name="Finance" round={true} size={32}
                        />
                        <span className='align-middle font-weight-bold pl-2'>Finance</span>
                    </td>
                    <td>
                        Rhoncus diam sit amet magna
                        tincidunt id a turpis.
                    </td>
                    <td>Mar 23, 2021</td>
                    <td>Mar 30, 2021</td>
                    <td>
                        <Badge pill variant="success" color="success" >
                            80%
                        </Badge>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Avatar
                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                            name="Finance" round={true} size={32}
                        />
                        <span className='align-middle font-weight-bold pl-2'>Finance</span>
                    </td>
                    <td>
                        Rhoncus diam sit amet magna
                        tincidunt id a turpis.
                    </td>
                    <td>Mar 23, 2021</td>
                    <td>Mar 30, 2021</td>
                    <td>
                        <Badge pill variant="success" color="success" >
                            80%
                        </Badge>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ProjectTable
