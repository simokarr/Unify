import auth from '@react-native-firebase/auth';

const signIn = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    console.error('Error signing in: ', error);
  }
};
