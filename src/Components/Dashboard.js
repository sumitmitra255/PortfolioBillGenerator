import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

export const Dashboard = (props) => {
	const customerslist = useSelector((state) => state.customerlist);
	const productlist = useSelector((state) => state.productlist);
	const billlist = useSelector((state) => state.billlist);
	return (
		<>
			<div class='box-1'>
				<div class='btn btn-one'>User DashBoard</div>
			</div>
			<div className='progressbardiv'>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell align='center'>
								<div className='dot'>
									Total Customers :{customerslist.length}
								</div>
							</TableCell>
							<TableCell align='center'>
								<div className='dot'>Total Products:{productlist.length}</div>
							</TableCell>
							<TableCell align='center'>
								<div className='dot'> Number of Bills {billlist.length}</div>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</>
	);
};
