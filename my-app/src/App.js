
import './App.css';
import React from "react";
import {  StyleSheet } from 'react-native';


export default function App() {
    return (
        <div className="App">
            <text style={styles.title}>
                Hello World!
            </text>
                <h2>this is my first app!</h2>
        </div>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 100,
        backgroundColor: '#fff',
        fontStyle: "bold",
        color: 'red',
    }
});
