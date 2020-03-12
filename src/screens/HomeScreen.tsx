import React from 'react'
import { SafeAreaView, View, Dimensions, StyleSheet, ScrollView } from 'react-native'
import * as shape from 'd3-shape'
import { AreaChart, Grid, BarChart } from 'react-native-svg-charts'
import { Card, Avatar, Title, Paragraph, Button, Appbar } from 'react-native-paper'
import Header from '../components/Header'

interface Props {

}
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
const fill = 'rgb(134, 65, 244)'

const HomeScreen: React.FC<Props> = () => {


    return (
        <View>
            <Header name="Home"/>
            <SafeAreaView>
                <ScrollView>
                    <Card style={{ margin: '2%' }}>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" />
                        <Card.Content>
                            <AreaChart
                                style={{ height: 150 }}
                                data={data}
                                contentInset={{ top: 10, bottom: 10 }}
                                curve={shape.curveNatural}
                                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                            >
                                <Grid />
                            </AreaChart>
                        </Card.Content>
                    </Card>
                    <Card style={{ margin: '2%' }}>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" />
                        <Card.Content>
                            <BarChart style={{ height: 150 }} data={data} svg={{ fill }} contentInset={{ top: 10, bottom: 10 }}>
                                <Grid />
                            </BarChart>
                        </Card.Content>
                    </Card>
                    <View style={styles.container}>
                        <Card>
                            <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                            <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Card content</Paragraph>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                            <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Card content</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        margin:'2%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '45%', // is 50% of container width
        margin: '2%',
    }
})