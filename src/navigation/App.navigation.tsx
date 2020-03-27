import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ACCENT_COLOR } from '../core/Constants';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor={ACCENT_COLOR}
                inactiveColor="gray"
                shifting
                //labelStyle={{ fontSize: 12 }}
                //style={{ backgroundColor: 'tomato' }}
                screenOptions={{

                    tabBarColor: 'white'
                }}
            >
                <Tab.Screen

                    name="Feed"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="trending-up" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="swap-vertical-variant" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}