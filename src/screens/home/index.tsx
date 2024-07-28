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
import PieChart from 'react-native-pie-chart';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

export const datazz = [
  {status: 'Progress', value: 10},
  {status: 'Completed', value: 20},
  {status: 'Pending', value: 30},
  {status: 'In Review', value: 40},
  {status: 'Approved', value: 50},
  {status: 'Rejected', value: 60},
];

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const widthAndHeight = 150;
  const series = [10, 20, 30, 50];
  const sliceColor = [THEME.RED, THEME.BLUE, THEME.GREEN, THEME.YELLOW];

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
            <View style={styles.xAxis}>
              <Text style={styles.percent}>90%</Text>
              <Text style={styles.percent}>80%</Text>
              <Text style={styles.percent}>70%</Text>
              <Text style={styles.percent}>60%</Text>
              <Text style={styles.percent}>50%</Text>
              <Text style={styles.percent}>40%</Text>
              <Text style={styles.percent}>30%</Text>
              <Text style={styles.percent}>20%</Text>
              <Text style={styles.percent}>10%</Text>
              <Text style={styles.percent}>00%</Text>
            </View>
            <View style={styles.yAxis}>
              <View
                style={[
                  styles.bar,
                  {backgroundColor: THEME.BLACK, height: hp(13)},
                ]}
              />
              <View
                style={[
                  styles.bar,
                  {backgroundColor: THEME.YELLOW, height: hp(8)},
                ]}
              />
              <View
                style={[
                  styles.bar,
                  {backgroundColor: THEME.GRAY, height: hp(10)},
                ]}
              />
              <View
                style={[
                  styles.bar,
                  {backgroundColor: THEME.BLUE, height: hp(18)},
                ]}
              />
            </View>
          </View>
          <View style={styles.progressBar}>
            <Text style={styles.barTitles}>Pending</Text>
            <Text style={styles.barTitles}>Follow Up</Text>
            <Text style={styles.barTitles}>Success</Text>
            <Text style={styles.barTitles}>Analysis</Text>
          </View>
        </View>
        <View style={styles.graphContainer}>
          <Text style={styles.leadStatus}>Lead by Status</Text>
          <View style={styles.graph}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.45}
              coverFill={THEME.WHITE}
            />
            <View>
              <View style={styles.pairow}>
                <View style={styles.circlegreen} />
                <Text style={styles.paitxt}>WhatsApp</Text>
              </View>
              <View style={styles.pairow}>
                <View style={styles.circleblue} />
                <Text style={styles.paitxt}>Facebook</Text>
              </View>
              <View style={styles.pairow}>
                <View style={styles.circleyellow} />
                <Text style={styles.paitxt}>Websites</Text>
              </View>
              <View style={styles.pairow}>
                <View style={styles.circlered} />
                <Text style={styles.paitxt}>Others</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
