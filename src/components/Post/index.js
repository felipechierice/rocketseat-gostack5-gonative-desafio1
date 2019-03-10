import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const bgColor = '#f2f2f2';
const authorColor = '#aaa';
const separatorColor = '#ddd';

const styles = StyleSheet.create({
  author: {
    color: authorColor,
  },
  container: {
    backgroundColor: bgColor,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    padding: 10,
  },
  header: {
    borderBottomColor: separatorColor,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
    <Text>{data.content}</Text>
  </View>
);

export default Post;
