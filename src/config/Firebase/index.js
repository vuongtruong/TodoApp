import firestore from '@react-native-firebase/firestore';

const Firebase = {
  // add todo item firestore
  getTodos: async () => {
    let snapshot = await firestore()
      .collection('Todos')
      .orderBy('id', 'desc')
      .get();
    let data = snapshot.docs.map(doc => doc.data());
    return data;
  },
  // add todo item firestore
  addNewTodo: todo => {
    return firestore().collection('Todos').doc(`${todo.id}`).set(todo);
  },
  // update todo item firestore
  updateTodo: id => {
    return firestore().collection('Todos').doc(`${id}`).update({
      completed: true,
    });
  },
  // delele todo item firestore
  deleteTodo: id => {
    return firestore().collection('Todos').doc(`${id}`).delete();
  },
};

export default Firebase;
