import { View, Text, Button, StyleSheet } from 'react-native';
import  { React, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'
import { FlashList } from '@shopify/flash-list';
const Home = () => {

    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    //fetch the data from firestore

    useEffect(() => {
        firebase
          .firestore()
          .collection('notes')
          .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
              const { note, title } = doc.data();
              newNotes.push({ note, title, id: doc.id });
            });
            setNotes(newNotes);
          });
      }, []);
      
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <FlashList>
                data={notes}
                numColumns={2}
                estimatedItemSize={100}
                renderItem={({item}) => (
                    <View style={Stylesheet.noteView}>
                        <Text style={Stylesheet.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style={Stylesheet.noteDescription}>
                            {item.note}
                        </Text>
                    </View>
                )}
            </FlashList>
            <Button title='Add Notes' onPress={navigation.navigate('NoteAdd')} />
        </View>
    )
    }

    export default Home

    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#fff'
        },
        noteView:{
            flex:1,
            backgroundColor: '#fff',
            margin:10,
            padding:10,
            borderRadius:10,
            shadowColor:'red',
            shadowOffset: {width:0, height:2},
            shadowOpacity:0.8,
            shadowRadius:2,
            elevation:7,
            alignItems:'center'
        },
        noteDescription:{
            fontSize:16,
            marginTop:5
        }
    })
