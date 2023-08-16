import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicSelect }) => {
  return (
    <div onClick={() => onTopicSelect(topic.id)} className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;