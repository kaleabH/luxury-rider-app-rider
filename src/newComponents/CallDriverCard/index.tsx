import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Paragraph, IconButton } from 'react-native-paper';

type CallDriverCardProps = {
  estimatedTime: string;
  date: string;
  startLocation: string;
  endLocation: string;
};

const CallDriverCard: React.FC<CallDriverCardProps> = ({
  estimatedTime,
  date,
  startLocation,
  endLocation,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>Estimated Time</Text>
            <Paragraph style={styles.estimatedTime}>{estimatedTime}</Paragraph>
            <Paragraph>Min</Paragraph>
          </View>
          <Paragraph>Date: {date}</Paragraph>
        </View>

        <View style={styles.locations}>
          <IconButton
            icon="google-maps"
            size={20}
            iconColor="#B80028"
          />
          <Paragraph style={styles.text}>{startLocation}</Paragraph>
          <Paragraph style={styles.text}>to</Paragraph>
          <Paragraph style={styles.text}>{endLocation}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    paddingRight:20,
  },
  estimatedTime: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  locations: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default CallDriverCard;
