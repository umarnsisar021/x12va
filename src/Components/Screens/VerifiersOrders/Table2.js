// import AvatarGroup from './AvatarGroup'
// import react from '../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
// // import vuejs from '@src/assets/images/icons/vuejs.svg'
// // import angular from '@src/assets/images/icons/angular.svg'
// // import bootstrap from '@src/assets/images/icons/bootstrap.svg'
// // import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
// // import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// // import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
// import { MoreVertical, Edit, Trash } from 'react-feather'
// import { Table, Badge, UncontrolledDropdown, 
//     DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

// const avatarGroupData1 = [
//   {
//     title: 'Sarah',
//     img: react,
//     imgHeight: 26,
//     imgWidth: 26
//   }
// ]

// const avatarGroupData2 = [
//   {
//     title: 'Vanna',
//     img: react,
//     imgHeight: 26,
//     imgWidth: 26
//   }
// ]

// const avatarGroupData3 = [
//   {
//     title: 'Justina',
//     img: react,
//     imgHeight: 26,
//     imgWidth: 26
//   }
// ]

// const avatarGroupData4 = [
//   {
//     title: 'Jenette',
//     img: react,
//     imgHeight: 26,
//     imgWidth: 26
//   }
// ]

// const TableBorderless = () => {
//   return (
//     <Table borderless responsive>
//       <thead>
//         <tr>
//           <th>Project</th>
//           <th>Client</th>
//           <th>Users</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>
//             <img className='mr-75' src={react} alt='angular' height='20' width='20' />
//             <span className='align-middle font-weight-bold'>Angular Project</span>
//           </td>
//           <td>Peter Charles</td>
//           <td>
//             <AvatarGroup data={avatarGroupData1} />
//           </td>
//           <td>
//             <Badge pill color='light-primary' className='mr-1'>
//               Active
//             </Badge>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <img className='mr-75' src={react} alt='react' height='20' width='20' />
//             <span className='align-middle font-weight-bold'>React Project</span>
//           </td>
//           <td>Ronald Frest</td>
//           <td>
//             <AvatarGroup data={avatarGroupData2} />
//           </td>
//           <td>
//             <Badge pill color='light-success' className='mr-1'>
//               Completed
//             </Badge>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <img className='mr-75' src={react} alt='vuejs' height='20' width='20' />
//             <span className='align-middle font-weight-bold'>Vuejs Project</span>
//           </td>
//           <td>Jack Obes</td>
//           <td>
//             <AvatarGroup data={avatarGroupData3} />
//           </td>
//           <td>
//             <Badge pill color='light-info' className='mr-1'>
//               Scheduled
//             </Badge>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <img className='mr-75' src={react} alt='bootstrap' height='20' width='20' />
//             <span className='align-middle font-weight-bold'>Bootstrap Project</span>
//           </td>
//           <td>Jerry Milton</td>
//           <td>
//             <AvatarGroup data={avatarGroupData4} />
//           </td>
//           <td>
//             <Badge pill color='light-warning' className='mr-1'>
//               Pending
//             </Badge>
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//   )
// }

// export default TableBorderless