import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StampCard = ({ stamps, requiredPoints }) => {
  const calculateLayout = (requiredPoints) => {
    
    const layouts = { 6: [2, 3], 8: [2, 4], 9: [3, 3], 10: [2, 5] };
    return layouts[requiredPoints] || [2, 3];
  };

  const renderStamps = () => {
    const layout = calculateLayout(requiredPoints);
    const [rows, cols] = layout;

    const stampElements = [];
    for (let row = 0; row < rows; row++) {
      const rowStamps = [];
      for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        const isFilled = index < stamps;
        const stampStyle = isFilled ? styles.stampFilled : styles.stampEmpty;
        const stampContent = isFilled ? <Text style={styles.stampText}>Filled</Text> : null;

        rowStamps.push(
          <View key={index} style={[styles.stamp, stampStyle]}>
            {stampContent}
          </View>
        );
      }
      stampElements.push(<View key={row} style={styles.row}>{rowStamps}</View>);
    }
    return stampElements;
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}></Text>
      <View style={styles.stampContainer}>{renderStamps()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stampContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  stamp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stampEmpty: {
    backgroundColor: 'white',
  },
  stampFilled: {
    backgroundColor: 'grey',
  },
  stampText: {
    color: 'white',
    fontSize: 10,
  },
});

export default StampCard;