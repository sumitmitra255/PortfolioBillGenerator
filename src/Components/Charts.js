import { useSelector } from 'react-redux';
import { CanvasJSChart } from './Home';

export const Charts = (props) => {
	const nocustomers = useSelector((state) => state.customerlist);
	const options = {
		backgroundColor: '#4caf50',
		animationEnabled: true,
		animationDuration: 3000,
		width: 320,
		height: 260,
		title: {
			text: 'Total Customers',
			fontColor: 'white',
		},
		subtitles: [
			{
				fontColor: 'white',
				text: `Customers : ${nocustomers.length}`,
				verticalAlign: 'center',
				fontSize: 14,
				dockInsidePlotArea: true,
			},
		],
		data: [
			{
				toolTipContent: '{y}',
				color: 'white',
				type: 'doughnut',
				showInLegend: true,
				indexLabel: '{name}: {y}',
				indexLabelBackgroundColor: '#4caf50',
				indexLabelFontColor: 'white',
				yValueFormatString: '',
				dataPoints: [{ name: 'No Of Customers', y: nocustomers.length }],
			},
		],
	};

	return (
		<>
			<CanvasJSChart
				options={options} />
		</>
	);
};
