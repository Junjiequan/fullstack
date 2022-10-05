import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import ArrowUp from '../../assets/shared/icon-arrow-up.svg';
import CommentIcon from '../../assets/shared/icon-comments.svg';
import * as F from './FeedbackItemElements';
import { useDispatch, useSelector } from 'react-redux';
import { upVote, downVote } from '../../actions';
import { Comments_type, Item } from '../../Types';
import { feedbackVariants } from '../../utilities/framerMotion';
import { motion } from 'framer-motion';

const FeedbackItem = (props: Item) => {
  const [executing, setExecuting] = useState(false);
  const controls = useAnimation();
  const location = useLocation();
  const USER = useSelector((state: any) => state.user);
  const LOGGED = useSelector((state: any) => state.logged);
  const path = location.pathname.replace('/feedback-detail/', '');
  const clickable = props.link.toLowerCase() !== path;
  clickable === true ? controls.start(feedbackVariants.in) : controls.stop();
  const dispatch = useDispatch();
  const skipTab = useRef<any>();
  const skipTab2 = useRef<any>();
  const countReplies: number = props.comments.reduce(
    (sum: number, cur: Comments_type) => (sum += cur.replies.length),
    0
  );
  const isVoted = () => {
    if (props.voted !== undefined) return props.voted;
    const found = props.votedList.includes(USER.username);
    return found;
  };
  useEffect(() => {
    if (!clickable) {
      skipTab.current.tabIndex = -1;
      skipTab2.current.tabIndex = -1;
    }
  }, [clickable]);

  const handleVote = async () => {
    if (!LOGGED) return;
    setExecuting(true);

    if (!isVoted()) {
      try {
        dispatch(upVote(props, props._id, USER));
      } finally {
        setTimeout(() => setExecuting(false), 1000);
      }
    } else {
      try {
        if (props.vote === 0) return;
        dispatch(downVote(props, props._id, USER));
      } finally {
        setTimeout(() => setExecuting(false), 1000);
      }
    }
  };

  return (
    <motion.li data-clickable={clickable} key={props._id} layout>
      <F.FeedbackDiv initial={clickable === true ? 'initial' : 'stop'} animate={controls} variants={feedbackVariants}>
        <F.Vote data-voted={isVoted()} onClick={handleVote} disabled={executing}>
          <F.VoteIcon width='10' height='7' src={ArrowUp} data-voted={isVoted()} alt='' />
          {props.vote}
        </F.Vote>
        <F.SuggestionWrapper to={'/feedback-detail/' + props.link} data-clickable={clickable} ref={skipTab}>
          <F.SuggestionTitle>{props.title}</F.SuggestionTitle>
          <F.SuggestionText>{props.detail}</F.SuggestionText>
          <F.Feature data-no-pointer={true} data-no-space={true} data-text={props.category} />
        </F.SuggestionWrapper>
        <F.CommentCounter to={'/feedback-detail/' + props.link} data-clickable={clickable} ref={skipTab2}>
          <F.CommentIcon width='18' height='16' src={CommentIcon} alt='' />
          {props.comments.length + countReplies}
        </F.CommentCounter>
      </F.FeedbackDiv>
    </motion.li>
  );
};

export default FeedbackItem;
