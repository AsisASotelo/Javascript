import {COMMENTS} from '../shared/comments';

export const Comments = (state=COMMENTS, action)=> {
    switch(action.type) {
        case ActionTypes.ADD__COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment); // An immutable operation on the state

        default:
            return state;

    }
}