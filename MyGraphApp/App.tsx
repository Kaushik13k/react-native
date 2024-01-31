import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  useColorScheme,
  Text,
  ScrollView,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const App = () => {
  const colorScheme = useColorScheme();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0});
  const [tooltipData, setTooltipData] = useState({label: '', value: 0});

  const line = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60, 75, 22, 56, 78, 32],
        strokeWidth: 3,
        color:
          colorScheme === 'dark'
            ? (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
            : (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: colorScheme === 'dark' ? '#121212' : '#f0f0f0',
    backgroundGradientFrom: colorScheme === 'dark' ? '#121212' : '#e26a00',
    backgroundGradientTo: colorScheme === 'dark' ? '#121212' : '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: colorScheme === 'dark' ? '#ffffff' : '#000000',
    },
  };

  const handleTooltip = (event, data) => {
    const x = event.nativeEvent.locationX;
    const y = event.nativeEvent.locationY;
    setTooltipPosition({x, y});
    setTooltipData(data);
    setTooltipVisible(true);

    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.fixedBox}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.graphContainer}>
            <LineChart
              data={line}
              width={Dimensions.get('window').width + line.labels.length * 50}
              height={220}
              yAxisLabel={'$'}
              chartConfig={chartConfig}
              bezier
              withDots
              withShadow
              withInnerLines
              withOuterLines
              fromZero
              onDataPointClick={({index, value, x, y}) =>
                handleTooltip(
                  {
                    nativeEvent: {
                      locationX: x,
                      locationY: y,
                    },
                  },
                  {label: line.labels[index], value},
                )
              }
            />
            {tooltipVisible && (
              <View
                style={[
                  styles.tooltip,
                  {left: tooltipPosition.x, top: tooltipPosition.y},
                ]}>
                <Text>{`${tooltipData.label}: ${tooltipData.value}`}</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedBox: {
    width: Dimensions.get('window').width - 60,
    height: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
  },
  graphContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
