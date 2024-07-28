import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../Leads/style';

const data = [
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },

  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },

  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
  {
    id: '1',
    name: 'John Smith',
    amount: '7500.00',
    position: 'Ceo SmithTech Solution',
    company: 'Google',
    status: 'Reopened',
    date: '5 April, 2024',
  },
];

const Leads = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.mainlead}>
      <View style={styles.leadsdata}>
        <View style={styles.Leadsrow}>
          <Text style={styles.leadtsxt}>{item.name}</Text>
          <Text style={styles.leadtsxt}>{item.amount}</Text>
        </View>
        <View style={styles.Leadsrow}>
          <Text style={styles.leadtsxt2}>{item.position}</Text>
          <Text style={styles.leadtsxt3}>{item.company}</Text>
        </View>
        <View style={styles.topboder} />
        <View style={styles.Leadsrow2}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icons/check.png')}
              style={styles.check}
              resizeMode="contain"
            />
            <Text style={styles.leadtsxt4}>{item.status}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/icons/calendar.png')}
              style={styles.calender}
              resizeMode="contain"
            />
            <Text style={styles.leadtsxt2}>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.boders} />
        <Text style={styles.txt}>Lead Summery</Text>
        <View style={{width: '55%'}}></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%',
            marginTop: 14,
          }}>
          <Image
            source={require('../../assets/icons/upload.png')}
            style={styles.upload}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt1}>1</Text>
          <Text style={styles.rowtxt}>New Lead</Text>
        </View>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt1}>5</Text>
          <Text style={styles.rowtxt}>Contracted</Text>
        </View>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt1}>3</Text>
          <Text style={styles.rowtxt}>Qualified</Text>
        </View>
        <View style={styles.rowdiv}>
          <Text style={styles.rowtxt1}>6</Text>
          <Text style={styles.rowtxt}>New Lead</Text>
        </View>
      </View>
      <View style={styles.leadtsxt1}>
        <Text style={styles.leadrowtxt}>Leads</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/filter.png')}
            style={styles.filter}
            resizeMode="contain"
          />
          <Text style={styles.leadrowtxt}>Filter</Text>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Image
          source={require('../../assets/icons/plus.png')}
          style={styles.filter}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Leads;
