import React, {useRef, useState} from 'react';
import {PanResponder, View, useWindowDimensions} from 'react-native';
import {AreaChart, XAxis} from 'react-native-svg-charts';
import {Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';
import * as shape from 'd3-shape';
import {ss} from '../../theme/scaledPixel';
import {ChartToolTip} from '../chart-tooltip/ChartTooltip';
import {styles} from './portfolioChart.styles';
import {theme} from '../../theme/theme';

const MONTH_LIST = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const VALUE_LIST = [20, 50, 45, 30, 80, 100];

export function PortfolioChart() {
  const {width} = useWindowDimensions();
  const size = useRef(MONTH_LIST.length);

  const [positionX, setPositionX] = useState(-1);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,

      onPanResponderGrant: evt => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderMove: evt => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderRelease: () => {
        setPositionX(-1);
      },
    }),
  );

  const updatePosition = (x: number) => {
    const x0 = ss(0);
    const chartWidth = width - ss(80);
    const xN = x0 + chartWidth;
    const xDistance = chartWidth / size.current;
    if (x <= x0) {
      x = x0;
    }
    if (x >= xN) {
      x = xN;
    }

    let value = parseInt(((x - x0) / xDistance).toFixed(0));
    if (value >= size.current - 1) {
      value = size.current - 1;
    }

    setPositionX(Number(value));
  };

  const LineGradient = ({line}: {line?: string}) => (
    <Svg>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="1" x2="1" y2="1">
          <Stop offset="0" stopColor="#2C8BFD" stopOpacity="0" />
          <Stop offset="1" stopColor="#2C8BFD" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path d={line} fill="none" stroke="url(#grad)" strokeWidth="2" />
    </Svg>
  );

  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" y1="0%" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#2C8BFD" stopOpacity={0.25} />
        <Stop offset="100%" stopColor="#fff" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  );

  const Tooltip = () => {
    if (positionX < 0) {
      return null;
    }

    const date = MONTH_LIST[positionX];

    return (
      <ChartToolTip
        value="220,342.76"
        date={date + ', 2023'}
        loans={2}
        containerStyle={styles.toolTipContainer}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container} {...panResponder.current.panHandlers}>
        <AreaChart
          style={styles.chart}
          data={VALUE_LIST}
          curve={shape.curveNatural}
          contentInset={{top: ss(40), bottom: ss(40)}}
          svg={{fill: 'url(#gradient)'}}>
          <LineGradient />
          <CustomGradient />
          <Tooltip />
        </AreaChart>
      </View>

      <XAxis
        style={styles.xAxis}
        svg={{fill: theme.colors.bodyText}}
        contentInset={{left: ss(10), right: ss(10)}}
        data={VALUE_LIST}
        formatLabel={value => MONTH_LIST[value]}
      />
    </View>
  );
}
