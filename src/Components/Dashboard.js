import { useSelector } from 'react-redux'
import { Table, TableBody, TableCell , TableRow } from '@material-ui/core'
import { CustomerList } from './Customer/CustomerList.js'
import { ProductList } from './Products/ProductList.js'
import { BillsList } from './Bill/BillsList.js'
import '../css/dashboard.css'
export const Dashboard = (props) => {
	const customerslist = useSelector((state) => state.customerlist)
	const productlist = useSelector((state) => state.productlist)
	const billlist = useSelector((state) => state.billlist)
	return (
		<div style={{ backgroundColor: '#4caf50' }}>
			<div className='box-1'>
				<div className='btn btn-one'>User DashBoard</div>
			</div>
			<div className='progressbardiv'>
				<Table>
					<TableBody>
						<TableRow key={Date.now() + Math.random()}>
							<TableCell key={Date.now() + Math.random()}  align='center'>
								<div className='dot'>
									Total Customers :{customerslist.length}
								</div>
							</TableCell >
							<TableCell key={Date.now() + Math.random()}  align='center'>
								<div className='dot'>Total Products:{productlist.length}</div>
							</TableCell >
							<TableCell key={Date.now() + Math.random()}  align='center'>
								<div className='dot'> Number of Bills {billlist.length}</div>
							</TableCell >
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<div className='recentsdiv'>
				<div className='box-1'>
					<div className='btn btn-one'>Recent 5 Customers</div>
					<CustomerList toggle={true} />
				</div>

				<div className='box-1'>
					<div className='btn btn-one'>Recent 5 Products</div>
					<ProductList toggle={true} />
				</div>
				<div className='box-1'>
					<div className='btn btn-one'>Recent 5 Bills</div>
					<BillsList toggle={true} />
				</div>
			</div>
		</div>
	)
}
