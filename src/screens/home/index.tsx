import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const data = [
  {id: '1', meetings: 150, title: 'Total Meetings', icon: 'groups'},
  {id: '2', meetings: 50, title: 'Tomorrow Meetings', icon: 'calendar-month'},
  {id: '3', meetings: 100, title: 'Today Meetings', icon: 'calendar-today'},
  {id: '4', meetings: 38, title: 'Total Leads', icon: 'leaderboard'},
];

const bars = [
  {color: THEME.BLACK, height: 30, percent: '30%', width: 30},
  {color: THEME.RED, height: 34, percent: '34%', width: 34},
  {color: THEME.GRAY, height: 50, percent: '50%', width: 50},
  {color: THEME.PRIMARY, height: 100, percent: '100%', width: 100},
  {color: THEME.GREEN, height: 80, percent: '80%', width: 80},
];

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id: any) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const renderItem = ({item}: any) => {
    const isSelected = item.id === selectedId;
    const backgroundColor = isSelected ? THEME.PRIMARY : THEME.WHITE;
    const textColor = isSelected ? THEME.WHITE : THEME.BLACK;
    const iconColor = isSelected ? THEME.WHITE : THEME.BLACK;

    return (
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
        style={[styles.box, {backgroundColor}]}>
        <MaterialIcons
          name={item.icon}
          size={30}
          color={iconColor}
          style={{alignSelf: 'flex-start', height: 30}}
        />
        <Text style={[styles.number, {color: textColor}]}>{item.meetings}</Text>
        <Text style={[styles.boxTitle, {color: textColor}]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME.PRIMARY} />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.innerContainer}>
            <View style={styles.iconContainer}>
              <Feather name="menu" size={23} color={THEME.WHITE} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>DashBoard</Text>
            </View>
            <View style={styles.iconContainer}>
              <Fontisto name="bell" size={20} color={THEME.WHITE} />
            </View>
            <View style={styles.iconContainer}>
              <Entypo
                name="dots-three-vertical"
                size={20}
                color={THEME.WHITE}
              />
            </View>
          </View>
        </View>
        <View style={styles.containerBox}>
          <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.graphContainer}>
          <Text style={styles.leadStatus}>Lead Status</Text>
          <View style={styles.barChart}>
            {bars.map((bar, index) => (
              <View
                key={index}
                style={[
                  styles.bar,
                  {backgroundColor: bar.color, height: bar.height},
                ]}
              />
            ))}
          </View>
          <View style={styles.barChart}>
            {bars.map((bar, index) => (
              <Text key={index} style={styles.percent}>
                {bar.percent}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.graphContainer}>
          <Text style={styles.leadStatus}>Lead Status</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '25%'}}>
              <View style={styles.verticalBarChart}>
                {bars.map((bar, index) => (
                  <Text key={index} style={styles.percent2}>
                    {bar.percent}
                  </Text>
                ))}
              </View>
            </View>
            <View style={{width: '75%'}}>
              <View style={styles.verticalBarChart}>
                {bars.map((bar, index) => (
                  <View
                    key={index}
                    style={[
                      styles.verticalBar,
                      {backgroundColor: bar.color, width: bar.width},
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
