import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import  { React, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Home = () => {

    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

    //fetch the data from firestore

    useEffect(() => {
        console.log("fetch")
        firebase
          .firestore()
          .collection('notes')
          .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
              const { note, title } = doc.data();
              newNotes.push({ note, title, id: doc.id });
            });
            console.log(newNotes)
            setNotes(newNotes);
          });
      }, []);
      
    return(
        <View style={styles.container}>
            <FlatList
                style={{marginTop: 20}}
                data={notes}
                numColumns={2}
                renderItem={({item}) => {
                    return(
                    <View style={styles.noteView}>
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.noteDescription}>
                            {item.note}
                        </Text>
                    </View>
                )}}>
            </FlatList>
            <TouchableOpacity style={{alignItems: 'center',height: 60, backgroundColor: '#ADD8E6', width: Dimensions.get("screen").width}} onPress={() => navigation.navigate('NoteAdd')}>
                <Text style={styles.noteDescription}>Add Note</Text>
            </TouchableOpacity>
        </View>
    )
    }

    export default Home

    const styles = StyleSheet.create({
        container: {
            flex:1,
            alignItems:'center',
            backgroundColor:'#c9f5d9'
        },
        noteView:{
            width: Dimensions.get("screen").width * 0.45,
            backgroundColor: '#fff',
            margin: Dimensions.get("screen").width * 0.01,
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
