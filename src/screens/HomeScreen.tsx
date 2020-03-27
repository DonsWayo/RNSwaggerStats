import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Dimensions, StyleSheet, ScrollView, FlatList } from 'react-native'
import * as shape from 'd3-shape'
import { AreaChart, YAxis, Grid, BarChart, ProgressCircle } from 'react-native-svg-charts'
import { Card, Avatar, Title, Paragraph, Button, Appbar } from 'react-native-paper'
import Header from '../components/Header'
import { ACCENT_COLOR } from '../core/Constants'
import DefaultStats from '../core/mocks/Stats.mock'
import { getStats } from '../core/Api'

interface Props {

}
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]



const HomeScreen: React.FC<Props> = () => {

    const [state, seState] = useState({
        DefaultStats,
        cpuTimeline: [],
        requestsTimeline: []
    });


    async function fetchMyAPI() {
        const stats = await getStats();
        if (stats) {
            console.log(stats);
            setCPU(stats);
        }

    }

    function setCPU(stats) {
        let cpuTimelineArr = [];
        let requestsTimelineArr = [];
        for (var item in stats.timeline.data) {
            console.log(stats.timeline.data[item].sys.cpu);
            cpuTimelineArr.push(stats.timeline.data[item].sys.cpu)
            requestsTimelineArr.push(stats.timeline.data[item].stats.requests)
        }

        seState({ DefaultStats: stats, cpuTimeline: cpuTimelineArr, requestsTimeline: requestsTimelineArr })
        console.log(state)
    }

    useEffect(() => {
        fetchMyAPI()
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <Header name={state.DefaultStats.name} />
            <ScrollView >
                <Card style={{ margin: '2%' }}>
                    <Card.Title title="CPU Usage %" subtitle="Over last 60 minutes" />
                    <Card.Content style={{ flexDirection: 'row' }}>
                        <YAxis
                            data={state.cpuTimeline}
                            contentInset={{ top:10, bottom: 0 }}
                            svg={{
                                fill: ACCENT_COLOR ,
                                fontSize: 10,
                            }}
                            numberOfTicks={10}
                            formatLabel={(value) => `${value} %`}
                        />
                        <AreaChart
                            style={{ height: 150, marginLeft: 10 , width: Dimensions.get('window').width - 80}}
                            data={state.cpuTimeline}
                            contentInset={{ top: 10, bottom: 10, right: 10 }}
                            curve={shape.curveNatural}
                            svg={{ fill: ACCENT_COLOR }}
                        >
                            <Grid />
                        </AreaChart>
                    </Card.Content>
                </Card>
                <Card style={{ margin: '2%' }}>
                    <Card.Title title="Request" subtitle="Over last 60 minutes" />
                    <Card.Content style={{ flexDirection: 'row' }}>
                    <YAxis
                            data={state.requestsTimeline}
                            contentInset={{ top:10, bottom: 10 }}
                            svg={{
                                fill: ACCENT_COLOR ,
                                fontSize: 10,
                            }}
                            numberOfTicks={5}
                            formatLabel={(value) => `${value}`}
                        />
                        <BarChart
                            style={{ height: 150, marginLeft: 10 , width: Dimensions.get('window').width - 80}}
                            data={state.requestsTimeline}
                            svg={{ fill: ACCENT_COLOR }}
                            contentInset={{ top: 10, bottom: 10 }}>
                            <Grid />
                        </BarChart>
                    </Card.Content>
                </Card>
                <View style={styles.container}>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.requests.toString()} subtitle="Requests" left={(props) => <Avatar.Icon {...props} icon="arrow-up" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.apdex_score.toString()} subtitle="Apdex Score" left={(props) => <ProgressCircle style={{ height: 200 }} progress={state.DefaultStats.all.apdex_score} strokeWidth={6} progressColor={ACCENT_COLOR} />} />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card style={styles.item}>
                        <Card.Title title={`${state.DefaultStats.all.req_rate.toFixed(3).toString()} %`} subtitle="Req Rate" left={(props) => <Avatar.Icon {...props} icon="percent" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                    <Card style={styles.item}>
                        <Card.Title title={`${state.DefaultStats.all.err_rate.toFixed(3).toString()} %`} subtitle="Err Rate" left={(props) => <Avatar.Icon {...props} icon="alert" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card style={styles.item}>
                        <Card.Title title={`${state.DefaultStats.sys.cpu.toFixed(2).toString()} %`} subtitle="CPU Usage" left={(props) => <ProgressCircle style={{ height: 200 }} progress={(state.DefaultStats.sys.cpu / 100)} strokeWidth={6} progressColor={ACCENT_COLOR} />} />
                    </Card>
                    <Card style={styles.item}>
                        <Card.Title title={`${(state.DefaultStats.sys.heapUsed / 1000000).toFixed(2).toString()} MB`} subtitle="Heap" left={(props) => <Avatar.Icon {...props} icon="gate" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.errors.toFixed(0).toString()} subtitle="Errors" left={(props) => <Avatar.Icon {...props} icon="alert" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.success.toFixed(0).toString()} subtitle="Success" left={(props) => <Avatar.Icon {...props} icon="check" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.redirect.toFixed(0).toString()} subtitle="Redirect" left={(props) => <Avatar.Icon {...props} icon="send" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.client_error.toFixed(0).toString()} subtitle="Client Error" left={(props) => <Avatar.Icon {...props} icon="alert" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card style={styles.item}>
                        <Card.Title title={state.DefaultStats.all.server_error.toFixed(0).toString()} subtitle="Server Error" left={(props) => <Avatar.Icon {...props} icon="alert-octagon" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                    <Card style={styles.item}>
                        <Card.Title title={`${state.DefaultStats.all.avg_time.toFixed(0).toString()} MS`} subtitle="Avg Time" left={(props) => <Avatar.Icon {...props} icon="timer" style={{ backgroundColor: ACCENT_COLOR }} color='white' />} />
                    </Card>
                </View>
            </ScrollView>
        </View>
    )

}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        margin: '2%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '45%', // is 50% of container width
        margin: '2%',
        height: 80
    }
})