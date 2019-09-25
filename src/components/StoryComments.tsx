import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Comments from './Comments';
import Story from './Story';

const StoryComments: React.FC<RouteComponentProps> = ({
  history: {
    location: {
      state: { story, commentsIds },
    },
  },
}) => (
  <div>
    <Story {...story} />
    <hr />
    <Comments commentsIds={commentsIds} />
  </div>
);

export default StoryComments;
