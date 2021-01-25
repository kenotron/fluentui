import { IMicroFeedbackComponent, IMicroFeedbackViewProps } from './MicroFeedback.types';
export declare type IMicroFeedbackState = Pick<IMicroFeedbackViewProps, 'vote' | 'isFollowUpVisible' | 'likeRef' | 'dislikeRef' | 'onCalloutDismiss' | 'onThanksDismiss' | 'onThanksShow' | 'onLikeVote' | 'onDislikeVote' | 'isThanksVisible'>;
export declare const useMicroFeedbackState: IMicroFeedbackComponent['state'];
