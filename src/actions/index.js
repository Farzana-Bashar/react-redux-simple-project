export const increment =(nr)=>{
    return {
      type: 'INCREMENT',
      payload: nr
    }
  };
export const decrement =()=>{
    return {
      type: 'DECREMENT'
    }
  };

export const signIn =()=>{
    return {
        type: 'SIGN_IN'
    }
}



// const success = await acceptInvitation(token);
//         if (success) {
//           if (!success.success) {
//             toaster.danger(success.message, {
//               duration: 2,
//             });
//           } else
//             toaster.success(success.message, {
//               duration: 2,
//             });