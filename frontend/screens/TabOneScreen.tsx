import React from 'react';
import { StyleSheet} from 'react-native';

import { DataTable } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

// Temp row data
const rawData = {
  tableData: [
    ["AAPL", "$10", "3", "buy", "01/02/2003"],
    ["GOOGL", "$20", "6", "buy", "01/02/2003"],
    ["AMZN", "$4", "9", "sell_short", "01/02/2003"]]}

interface TransactionProps {
  tableData?: Array<Array<string>>;
}

interface DataTableRowProps {
  rowData?: Array<string>;
}

/*
 * A single row of the table 
 */
const DataTableRow = (props: DataTableRowProps) => {
  const { rowData } = props;
  return (
    <View>
      <DataTable.Row>
        <DataTable.Cell>{rowData[0]}</DataTable.Cell>
        <DataTable.Cell>{rowData[1]}</DataTable.Cell>
        <DataTable.Cell>{rowData[2]}</DataTable.Cell>
        <DataTable.Cell>{rowData[3]}</DataTable.Cell>
        <DataTable.Cell>{rowData[4]}</DataTable.Cell>
      </DataTable.Row>
    </View>
    
  );
};

const TransactionScreen = (/*props: TransactionProps*/) => {
  const props = rawData; // TEMP
  const { tableData } = props;

  // Loop over the String arrays in tableData and make a row for each one of them
  let rowList=tableData.map((row) => {
    return <DataTableRow rowData={row}/>
  })

  return (
    <View style={styles.container}>
      <Text>Transaction History</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Stock</DataTable.Title>
          <DataTable.Title>Price</DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title>Side</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>
        
        {rowList}
      </DataTable>
      <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
    </View>
    );
  };

export default TransactionScreen;