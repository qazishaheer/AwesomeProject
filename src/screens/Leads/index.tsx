import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../Leads/style';
const Leads = () => {
  return (
    <View>
      <Text style={styles.txt}>Lead Summery</Text>
      <View style={styles.row}>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt}>1</Text>
          <Text style={styles.rowtxt}>New Lead</Text>
        </View>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt}>1</Text>
          <Text style={styles.rowtxt}>Contracted</Text>
        </View>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt}>1</Text>
          <Text style={styles.rowtxt}>Qualified</Text>
        </View>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt}>1</Text>
          <Text style={styles.rowtxt}>New Lead</Text>
        </View>
      </View>
      <View style={styles.leadtsxt}>
        <Text>Leads</Text>
        <Text>Filter</Text>
      </View>
      <View style={styles.mainlead}>
        <View style={styles.leadsdata}>
          <View style={styles.Leadsrow}>
            <Text style={styles.leadtsxt}>John Smith</Text>
            <Text style={styles.leadtsxt}>7500.00</Text>
          </View>
          <View style={styles.Leadsrow}>
            <Text style={styles.leadtsxt}>Ceo SmithTech Solution</Text>
            <Text style={styles.leadtsxt}>Google</Text>
          </View>
          <View style={styles.Leadsrow2}>
            <Text style={styles.leadtsxt}>Reopened</Text>
            <Text style={styles.leadtsxt}>5 April, 2024</Text>
          </View>
        </View>

        <View></View>
      </View>
    </View>
  );
};

export default Leads;
