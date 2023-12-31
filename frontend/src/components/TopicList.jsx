import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({topics, onTopicSelect}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} topic={topic} onTopicSelect={onTopicSelect} /> //left topic is prop, right one is object
      ))}
    </div>
  );
};

export default TopicList;