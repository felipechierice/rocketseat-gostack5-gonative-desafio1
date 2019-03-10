/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Post from '../Post';

export default class Timeline extends Component {
  state = {
    posts: [
      {
        id: 0,
        author: 'Felipe Chierice',
        title: 'Hello World!',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto, repudiandae consequatur soluta sit quod amet enim? Pariatur, enim accusamus.',
      },
      {
        id: 1,
        author: 'Felipe Chierice',
        title: 'My first React Native App',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti in autem omnis voluptas pariatur aliquam.',
      },
      {
        id: 2,
        author: 'Felipe Chierice',
        title: 'My first React Native App',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti in autem omnis voluptas pariatur aliquam.',
      },
      {
        id: 3,
        author: 'Felipe Chierice',
        title: 'My first React Native App',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti in autem omnis voluptas pariatur aliquam.',
      },
      {
        id: 4,
        author: 'Felipe Chierice',
        title: 'My first React Native App',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti in autem omnis voluptas pariatur aliquam.',
      },
    ],
  };

  bgColor = '#7d42f4';

  styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: this.bgColor,
      flexDirection: 'row',
      flex: 1,
    },
  });

  render() {
    const { posts } = this.state;
    return (
      <View style={this.styles.container}>
        <ScrollView style={{ padding: 10 }}>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
