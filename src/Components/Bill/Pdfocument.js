import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
export const MyDocument = (props) => {
	const { data } = props
	const styles = StyleSheet.create({
		page: {
			flexDirection: 'row',
			backgroundColor: '#E4E4E4',
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1,
		},
	})
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.section}>
					<Text>INVOICE</Text>
				</View>
				<View style={styles.section}>
					<Text>Rs.{data.total}</Text>
				</View>
			</Page>
		</Document>
	)
}
